import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.SERVER_PORT || 3000;
const frontEndPath = path.resolve(__dirname, '..', 'client', 'dist');

app.use(bodyParser.json());

// Serve static files from the client/dist directory
// Without this the index.html will not be able to load the js file nor the css file or any other file resulting on a white page
app.use(express.static(frontEndPath));

app.get('*', (req, res) => {
  //here we provide the react built file it will load the js and the js will load everything else
  res.sendFile(path.join(frontEndPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.listen;
