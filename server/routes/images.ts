import { Router } from 'express';
import searchGiphy from '../services/giphyService';
import * as core from 'express-serve-static-core';
import serachPixBay from '../services/pixBayService';

const a: string = 'fadsf';
const imagesRouter: core.Router = Router();

imagesRouter.get('/images', async function (req, res, next) {
  const q: string = req.query.q.toString();
  const limit: string = req.query.limit.toString();
  const offset: string = req.query.offset.toString();
  const halfLimit: number = +limit / 2;
  const giphyData = await searchGiphy(q, halfLimit, offset);
  const pixBayData = await serachPixBay(q, halfLimit, offset);
  res.json([...giphyData, ...pixBayData]);
});

export default imagesRouter;
