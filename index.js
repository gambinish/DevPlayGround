const express = require('express');
app = express();
// const axios = require('axios');
// require('dotenv').config()

var Pokedex = require('pokedex-promise-v2');

var options = {
  protocol: 'https',
  hostName: 'localhost:2000',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}

var P = new Pokedex(options);

P.getPokemonByName('eevee') // with Promise
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log('There was an ERROR: ', error);
  });

// P.getPokemonByName(34, function (response, error) { // with callback
//   if (!error) {
//     console.log(response);
//   } else {
//     console.log(error)
//   }
// });

// P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/'])
//   .then(function (response) {
//     console.log(response); // resource function accepts singles or arrays of URLs/paths
//   });

app.listen(2000);