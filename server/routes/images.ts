import { Router } from 'express';
import * as core from 'express-serve-static-core';
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from 'http-status-codes';

import searchGiphy from '../services/giphyService';
import serachPixBay from '../services/pixBayService';

const imagesRouter: core.Router = Router();

imagesRouter.get('/images', async function (req, res, next) {
  let { q = '', limit = 10, offset = 1 } = req.query;

  if (!q || !limit || !offset) {
    return res
      .status(BAD_REQUEST)
      .send('Query, limit and offset are required parameters');
  }
  if (!Number(limit) || !Number(offset)) {
    return res.status(BAD_REQUEST).send('Limit parameter must be a number');
  }

  q = q.toString();
  limit = limit.toString();
  offset = offset.toString();
  const halfLimit: number = +limit / 2;
  try {
    const giphyData = await searchGiphy(q, halfLimit, offset);
    const pixBayData = await serachPixBay(q, halfLimit, offset);
    res.json([...giphyData, ...pixBayData]);
  } catch (err) {
    console.log(err);
    return res.send('Error').status(INTERNAL_SERVER_ERROR);
  }
});

export default imagesRouter;
