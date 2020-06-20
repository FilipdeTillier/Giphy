interface PixBayInterface {
  total: number;
  totalHits: number;
  hits: { [key: string]: string | number }[];
}

export { PixBayInterface };
