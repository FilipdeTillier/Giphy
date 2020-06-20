import * as express from 'express';

const app = express();
const port = 3001;

app.get('/', (err: any, res: any) => {
  res.send('hehe');
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
