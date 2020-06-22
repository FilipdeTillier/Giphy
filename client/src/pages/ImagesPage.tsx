import React, { useEffect, useState } from 'react';

import ImagesSearch from '../components/ImagesSearch/ImagesSearch';
import { getGiphy } from '../services/giphyService';
import ImagesList from '../components/ImagesList/ImagesList';

const ImagesPage: React.FC = () => {
  const [giphys, setGiphys] = useState<string[]>([]);
  const [offset, setOffset] = useState<number>(1);
  const perPage = 10;

  function loadMore() {
    setOffset(offset + 1);
  }

  async function onSearchGiphy(searchValue: string) {
    try {
      const giphy = await getGiphy(searchValue, offset, perPage);
      setGiphys([...giphy]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  return (
    <div>
      <h3>Search your giphy</h3>
      <ImagesSearch onSubmit={onSearchGiphy} />
      <ImagesList images={giphys} loadMore={loadMore} />
    </div>
  );
};

export default ImagesPage;
