import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.listen;
