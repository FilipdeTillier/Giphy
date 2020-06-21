import * as express from 'express';
import * as cors from 'cors';

import imagesRouter from './routes/images';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/api', imagesRouter);

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
