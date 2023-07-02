import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.SERVER_PORT || 3000;
const frontEndPath = path.resolve(__dirname, '..', 'client', 'dist');

app.use(bodyParser.json());
// Serve static files from the client/dist directory
app.use(express.static(frontEndPath));

app.get('*', (req, res) => {
  console.log(frontEndPath);
  res.sendFile(path.join(frontEndPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.listen;
