type GiphyObcjetInterface = {
  [key: string]: GiphyObcjetInterface;
};

interface GiphyInterface {
  [key: string]: string | number | GiphyObcjetInterface;
  images: GiphyObcjetInterface;
}

export { GiphyInterface };
