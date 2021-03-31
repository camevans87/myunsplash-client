import React, { useState } from 'react';
import './card.css';
import Button from '@material-ui/core/Button';

const Card = ({ image, mutate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img alt="img" className="img" src={image.imageUrl} />
      {isHovered && (
        <>
          <Button
            onClick={() => mutate(image._id)}
            variant="outlined"
            color="primary"
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              textTransform: 'none',
              borderColor: 'red',
              color: 'red',
              borderRadius: '38px',
            }}
          >
            delete
          </Button>
          <div
            className="label-font"
            style={{ position: 'absolute', left: '24px', bottom: '33px' }}
          >
            {image.imageTag}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
