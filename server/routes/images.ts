import { Router } from 'express';
import searchGiphy from '../services/giphyService';
import * as core from 'express-serve-static-core';
import serachPixBay from '../services/pixBayService';
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from 'http-status-codes';
import { isQueryValid } from '../helpers/routesValidation';

const a: string = 'fadsf';
const imagesRouter: core.Router = Router();

imagesRouter.get('/images', async function (req, res, next) {
  // isQueryValid(req, res, next);
  let { q = '', limit = 10, offset = 1 } = req.query;
  if (!q || !limit || !offset) {
    return res
      .status(BAD_REQUEST)
      .send('Query, limit and offset are required parameters');
    // next();
  }
  if (!Number(limit) || !Number(offset)) {
    return res.status(BAD_REQUEST).send('Limit parameter must be a number');
    // next();
  }
  q = q.toString();
  limit = limit.toString();
  offset = offset.toString();
  const halfLimit: number = +limit / 2;
  console.log('before TRY TO CATCH!');
  try {
    console.log('TRY TO CATCH!');
    const giphyData = await searchGiphy(q, halfLimit, offset);
    const pixBayData = await serachPixBay(q, halfLimit, offset);
    res.json([...giphyData, ...pixBayData]);
  } catch (err) {
    return res.send('Error').status(INTERNAL_SERVER_ERROR);
  }
});

export default imagesRouter;
