const axios = require('axios');

function anotar(texto){
axios.post('https://stne.xyz/documents', texto)
  .then(function (response) {
    console.log('https://stne.xyz/' + response.data.key)
  })
  .catch(function (error) {
    console.log(error);
  });
}

exports.anotar = anotar;
