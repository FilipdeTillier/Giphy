import axios from 'axios';
import qs from 'querystringify';

const API_URL = process.env.REACT_APP_API_BASE;

function getGiphy(q: string, limit: number, offset: number) {
  const query = qs.stringify({ q, limit, offset });
  return axios
    .get(`${API_URL}images?${query}`)
    .then((res) => console.log(res.data));
}

export { getGiphy };
