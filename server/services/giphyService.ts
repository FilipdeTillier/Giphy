import axios, { AxiosResponse } from 'axios';
import { giphyMapData } from '../helpers/index';

const GIPHY_API_KEY: string = 'vhhkB8u81GKIKahrnq4Miw5ZjAlA9lhi';
const GIPHY_API_URL: string = 'http://api.giphy.com/v1/gifs/search?';

async function searchGiphy(q: string, limit: number, offset: string) {
  const url: string = `${GIPHY_API_URL}q=${q}&limit=${limit}&offset=${offset}`;
  const response: AxiosResponse = await axios.get(url, {
    headers: {
      api_key: GIPHY_API_KEY,
    },
  });
  const data = giphyMapData(response.data.data);
  return data;
}

export default searchGiphy;
