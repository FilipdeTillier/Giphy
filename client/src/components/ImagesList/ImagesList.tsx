import React from 'react';

interface ImagesListProps {
  images: string[];
}

const ImagesList: React.FC<ImagesListProps> = ({ images }) => {
  return (
    <>
      <div className="images-list">
        {images.map((image) => (
          <div key={image} className="card">
            <img
              className="card__image"
              src={image}
              alt={image}
              width="100%"
              height="100%"
            ></img>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImagesList;
