const express = require('express');
const app = express();

const axios = require('axios');

let url = 'google.com';

app.get('/', (req, res) => {
  axios.get(url)
    .then(response => {
      console.log(response.data);
      res.json('hello world');
    })
    .catch(err => {
      res.json(err)
    })
})

app.listen(2000);