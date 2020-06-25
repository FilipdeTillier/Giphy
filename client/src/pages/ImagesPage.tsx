import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import ImagesSearch from '../components/ImagesSearch/ImagesSearch';
import * as giphyService from '../services/giphyService';
import ImagesList from '../components/ImagesList/ImagesList';

const ImagesPage: React.FC = () => {
  const [giphys, setGiphys] = useState<string[]>([]);
  const [offset, setOffset] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const [pending, setPending] = useState<boolean>(false);
  const [noResults, setNoResults] = useState(false);

  const myStateRef: any = React.useRef(setOffset);
  const perPage = 20;

  async function getGiphy(
    searchValue: string,
    offset: number,
    limit: number = perPage
  ) {
    setPending(true);
    setNoResults(false);
    try {
      const giphy: string[] = await giphyService.getGiphy(
        searchValue,
        offset,
        limit
      );
      setPending(false);

      return giphy;
    } catch (err) {
      console.log(err);
      setPending(false);
    }
  }

  async function onSearchGiphy(value: string) {
    try {
      setSearchValue(value);
      setOffset(1);
      myStateRef.current = 1;
      const giphy = await getGiphy(value, 1);
      if (giphy?.length) {
        setGiphys(giphy);
      } else {
        setNoResults(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getNextPage() {
    const giphy = await getGiphy(searchValue, offset);
    if (giphy?.length) {
      setGiphys([...giphys, ...giphy]);
    } else {
      setNoResults(true);
    }
  }

  function loadOnScroll() {
    if (
      document.body.offsetHeight - window.innerHeight - window.scrollY <= 1 &&
      !pending
    ) {
      setOffset(myStateRef.current + 1);
    }
  }

  useEffect(() => {
    myStateRef.current = offset;
    if (offset > 1) {
      getNextPage();
    }
  }, [offset]);

  useEffect(() => {
    window.onscroll = debounce(() => loadOnScroll(), 500);
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div>
      <h3>Search your giphy</h3>
      <ImagesSearch onSubmit={onSearchGiphy} />
      <ImagesList images={giphys} />
      {noResults && <p>No results</p>}
    </div>
  );
};

export default ImagesPage;
