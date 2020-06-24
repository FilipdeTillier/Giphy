import axios, { AxiosResponse } from 'axios';
import { pixBayMapData } from '../helpers/index';

const { PIXBAY_API_KEY } = process.env;
const PIXBAY_API_URL: string = `https://pixabay.com/api/?key=${PIXBAY_API_KEY}`;

async function serachPixBay(q: string, per_page: number, page: string) {
  const url: string = `${PIXBAY_API_URL}&q=${q}&per_page=${per_page}&page=${page}`;
  const response: AxiosResponse = await axios.get(url);
  const pixBayData = pixBayMapData(response.data);
  return pixBayData;
}

export default serachPixBay;
