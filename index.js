const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('500, JsVvJzFOKezEWtnZPSZjdXyKabOwYdEj, https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets');
})

app.listen(2500);