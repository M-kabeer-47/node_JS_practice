import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addUser', (req, res) => {
  console.log('Received POST request:', req.body);
  res.send(req.body);
  console.log('Successfully registered via POST');
});

app.get('/addUser', (req, res) => {
  console.log('Received GET request with query:', req.query);
  console.log(req.query);
  res.send(`<h1>Welcome to the addUser page</h1><p>${JSON.stringify(req.query)}</p>`);
  console.log('Successfully registered via GET');
});

app.listen(3001, () => {
  console.log('Server listening on Port 3001');
});
