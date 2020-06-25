interface GiphyImageInterface {
  height: string;
  size: string;
  url: string;
  width: string;
}

interface GiphyRecordInterace {
  id: string;
  images: {
    [key: string]: GiphyImageInterface;
  };
}

export { GiphyRecordInterace };
