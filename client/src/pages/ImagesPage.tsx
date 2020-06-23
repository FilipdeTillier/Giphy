import React, { useEffect, useState } from 'react';

import ImagesSearch from '../components/ImagesSearch/ImagesSearch';
import * as giphyService from '../services/giphyService';
import ImagesList from '../components/ImagesList/ImagesList';

const ImagesPage: React.FC = () => {
  const [giphys, setGiphys] = useState<string[]>([]);
  const [offset, setOffset] = useState<number>(1);
  const perPage = 20;

  function loadMore() {
    setOffset(offset + 1);
  }

  async function getGiphy(
    searchValue: string,
    offset: number,
    limit: number = perPage
  ) {
    try {
      const giphy: string[] = await giphyService.getGiphy(
        searchValue,
        offset,
        limit
      );
      return giphy;
    } catch (err) {
      console.log(err);
    }
  }

  async function onSearchGiphy(searchValue: string) {
    try {
      const giphy = await getGiphy(searchValue, 1);
      giphy?.length && setGiphys(giphy);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function get() {
      const giphy = await getGiphy('Burgers', offset);
      giphy?.length && setGiphys([...giphys, ...giphy]);
    }
    if (offset > 1) {
      get();
    }
  }, [offset]);

  useEffect(() => {
    document.addEventListener('scroll', (e) => console.log(e));
    return () => {
      document.removeEventListener('scroll', (e) => console.log(e));
    };
  });

  return (
    <div>
      <h3>Search your giphy</h3>
      <ImagesSearch onSubmit={onSearchGiphy} />
      <ImagesList images={giphys} loadMore={loadMore} />
    </div>
  );
};

export default ImagesPage;
