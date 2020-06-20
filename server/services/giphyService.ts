import axios, { AxiosResponse } from 'axios';

const GIPHY_API_KEY: string = 'vhhkB8u81GKIKahrnq4Miw5ZjAlA9lhi';
const GIPHY_API_URL = 'http://api.giphy.com/v1/gifs/search?';

async function searchGiphy(q: string, limit: string, offset: string) {
  const url: string = `${GIPHY_API_URL}q=${q}&limit=${limit}&offset=${offset}`;
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        api_key: GIPHY_API_KEY,
      },
    });
    // console.log(response.data.data);
    const { data } = response.data;
  } catch (err) {
    console.log(err);
  }
}

export default searchGiphy;
