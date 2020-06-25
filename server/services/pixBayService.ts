import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';

import { pixBayMapData } from '../helpers/index';

dotenv.config();
const { PIXBAY_API_KEY } = process.env;
const PIXBAY_API_URL: string = `https://pixabay.com/api/?key=${PIXBAY_API_KEY}`;

async function serachPixBay(q: string, per_page: number, page: string) {
  try {
    const url: string = `${PIXBAY_API_URL}&q=${q}&per_page=${per_page}&page=${page}`;
    const response: AxiosResponse = await axios.get(url);
    const pixBayData = pixBayMapData(response.data);
    return pixBayData;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default serachPixBay;
