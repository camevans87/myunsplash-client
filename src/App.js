import React, { useState } from 'react';
import Header from './components/header/Header';
import './index.css';
import MasonryLayout from './components/masonry/Masonry';
import AddPhotoModal from './components/modal/AddPhotoModal';
import { useQuery, useMutation } from 'react-query';
import { fetchImages, deleteImage, addImage } from './services/imageServices';

function App() {
  const [open, setOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [imgTag, setImgTag] = useState('');
  const [search, setSearch] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { isLoading, isError, data, error, refetch } = useQuery(
    'images',
    fetchImages
  );

  const { mutate: delImg } = useMutation(deleteImage, {
    onSuccess: refetch,
  });

  const { mutate: addImg } = useMutation(addImage, {
    onSuccess: () => {
      refetch();
      handleClose();
      setImgUrl('');
      setImgTag('');
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const images = data.sort(function (a, b) {
    let dateA = new Date(a.dateAdded),
      dateB = new Date(b.dateAdded);
    return dateB - dateA;
  });

  const filteredImages = () =>
    images.filter((i) =>
      i.imageTag.toLowerCase().includes(search.toLowerCase())
    );

  console.log(filteredImages());

  return (
    <div>
      <Header handleOpen={handleOpen} search={search} setSearch={setSearch} />
      <MasonryLayout images={filteredImages()} mutate={delImg} />
      <AddPhotoModal
        open={open}
        handleClose={handleClose}
        mutate={addImg}
        imgUrl={imgUrl}
        setImgUrl={setImgUrl}
        imgTag={imgTag}
        setImgTag={setImgTag}
      />
    </div>
  );
}

export default App;
