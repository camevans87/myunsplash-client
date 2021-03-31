import axios from 'axios';

export const fetchImages = async () => {
  const res = await axios.get('http://localhost:4000/images');
  return res.data;
};

export const deleteImage = async (id) => {
  const res = await axios.delete(`http://localhost:4000/images/${id}`);
  return res;
};

export const addImage = async (newImage) => {
  console.log('Add image fired');
  const res = await axios.post('http://localhost:4000/images', newImage);
  console.log(res);
  return res;
};
