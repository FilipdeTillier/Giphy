import { PixBayInterface } from 'interfaces/PixBayInterfaces';
import { GiphyInterface } from 'interfaces/GiphyInterfaces';

function pixBayMapData({ hits }: PixBayInterface) {
  return hits.map((hit) => hit.webformatURL);
}

function giphyMapData(giphyData: GiphyInterface[]) {
  return giphyData.map((giphy) => giphy.images.original.url);
}

export { pixBayMapData, giphyMapData };
