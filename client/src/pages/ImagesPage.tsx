import React, { useEffect, useState } from 'react';

import ImagesSearch from '../components/ImagesSearch/ImagesSearch';
import * as giphyService from '../services/giphyService';
import ImagesList from '../components/ImagesList/ImagesList';

const ImagesPage: React.FC = () => {
  const [giphys, setGiphys] = useState<string[]>([]);
  const [offset, setOffset] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
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

  async function onSearchGiphy(value: string) {
    try {
      setSearchValue(value);
      const giphy = await getGiphy(value, 1);
      giphy?.length && setGiphys(giphy);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getNextPage() {
      const giphy = await getGiphy(searchValue, offset);
      giphy?.length && setGiphys([...giphys, ...giphy]);
    }
    if (offset > 1) {
      getNextPage();
    }
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
