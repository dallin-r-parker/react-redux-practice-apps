const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const array = require('./array.js');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/get-chats', function(req, res) {
  res.status(200).send(array);
})

app.post('/api/new-message', function(req,res) {
  array.push(req.body.message)
  res.status(200).send('ok')
})




const port = 8000;
app.listen(port, () => {
  console.log('listening to port: ', port);
})
