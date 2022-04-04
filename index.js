const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

let content = 'Hello World!';

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(content);
});

app.post('/', (req, res) => {
  res.send(req.body);
});

app.put('/', (req, res) => {
  content = req.body.content;
  res.send(content);
});

app.delete('/:id', (req, res) => {
  res.send(req.params.id);
});
