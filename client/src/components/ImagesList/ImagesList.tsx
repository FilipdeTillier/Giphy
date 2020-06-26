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
            <img className="card__image" src={image} alt={image}></img>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImagesList;
