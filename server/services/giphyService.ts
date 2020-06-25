import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';

import { giphyMapData } from '../helpers/index';

dotenv.config();
const { GIPHY_API_KEY } = process.env;
const GIPHY_API_URL: string = 'http://api.giphy.com/v1/gifs/search?';

async function searchGiphy(q: string, limit: number, offset: string) {
  try {
    const url: string = `${GIPHY_API_URL}q=${q}&limit=${limit}&offset=${offset}`;
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        api_key: GIPHY_API_KEY,
      },
    });
    const { data } = response.data;
    const giphys = giphyMapData(data);
    return giphys;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default searchGiphy;
