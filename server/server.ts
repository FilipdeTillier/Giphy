import * as express from 'express';

import imagesRouter from './routes/images';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', imagesRouter);

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
