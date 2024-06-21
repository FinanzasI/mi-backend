const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let data = require('./db.json');

// Rutas para usuarios
app.get('/users', (req, res) => {
  res.json(data.users);
});

app.post('/users', (req, res) => {
  const newUser = { id: data.users.length + 1, ...req.body };
  data.users.push(newUser);
  res.json(newUser);
});

// Rutas para usuarios excluidos
app.get('/excluded_users', (req, res) => {
  res.json(data.excluded_users);
});

// Rutas para data
app.get('/data', (req, res) => {
  res.json(data.data);
});

app.post('/data', (req, res) => {
  const newData = { id: data.data.length + 1, ...req.body };
  data.data.push(newData);
  res.json(newData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
