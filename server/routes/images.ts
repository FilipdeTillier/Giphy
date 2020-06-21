import { Router } from 'express';
import searchGiphy from '../services/giphyService';
import * as core from 'express-serve-static-core';
import serachPixBay from '../services/pixBayService';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

const a: string = 'fadsf';
const imagesRouter: core.Router = Router();

imagesRouter.get('/images', async function (req, res, next) {
  const q: string = req.query.q.toString();
  const limit: string = req.query.limit.toString();
  const offset: string = req.query.offset.toString();
  const halfLimit: number = +limit / 2;
  try {
    const giphyData = await searchGiphy(q, halfLimit, offset);
    const pixBayData = await serachPixBay(q, halfLimit, offset);
    res.json([...giphyData, ...pixBayData]);
  } catch (err) {
    return res.send('Error').status(INTERNAL_SERVER_ERROR);
  }
});

export default imagesRouter;
