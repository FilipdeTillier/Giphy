import { Request, Response, NextFunction } from 'express';
import { BAD_REQUEST } from 'http-status-codes';

function isQueryValid(req: Request, res: Response, next: NextFunction) {
  const { q, limit, offset } = req.query;
  if (!q || !limit || !offset) {
    res
      .status(BAD_REQUEST)
      .send('Query, limit and offset are required parameters');
    next();
  }
  if (!Number(limit) || !Number(offset)) {
    res.status(BAD_REQUEST).send('Limit parameter must be a number');
    next();
  }
}

export { isQueryValid };
