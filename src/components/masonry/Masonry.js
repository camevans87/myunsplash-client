import React from 'react';
import Masonry from 'react-masonry-css';
import Card from '../card/Card';
import './masonry.css';

const MasonryLayout = ({ images, mutate }) => {
  return (
    <div className="grid-container">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
        {images.map((image) => (
          <Card key={image._id} image={image} mutate={mutate} />
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
