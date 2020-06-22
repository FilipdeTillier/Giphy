import React from 'react';

interface ImagesListProps {
  images: string[];
  loadMore: () => void;
}

const ImagesList: React.FC<ImagesListProps> = ({ images, loadMore }) => {
  return (
    <>
      <div className="images-list">
        {images.map((image) => (
          <div key={image} className="card">
            <img
              className="card__image"
              src={image}
              width="100%"
              height="100%"
            ></img>
          </div>
        ))}
      </div>
      {images.length > 0 && (
        <div className="images-button">
          <button type="button" onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default ImagesList;
