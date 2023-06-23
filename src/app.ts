import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use('/', (req, res) => {
  res.send('Hello World');
});

console.log(process.env.SERVER_PORT);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.listen;
