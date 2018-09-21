const express = require('express');
app = express();

app.get('/', (req, res) => {
  res.json('hello world');
})

app.listen(2000);