import { Router } from 'express';
import searchGiphy from '../services/giphyService';
import * as core from 'express-serve-static-core';

const a: string = 'fadsf';
const imagesRouter: core.Router = Router();

imagesRouter.get('/images', async function (req, res, next) {
  const q: string = req.query.q.toString();
  const limit: string = req.query.limit.toString();
  const offset: string = req.query.offset.toString();
  const data = await searchGiphy(q, limit, offset);
  res.json(data);
});

export default imagesRouter;
