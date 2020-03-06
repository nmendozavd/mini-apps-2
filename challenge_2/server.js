const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.use(express.static('public'))

app.get('/prices', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2014-09-05')
    .then((response) => {
      // console.log(response.data);
      var data = response.data;
      res.status(200);
      res.send(data);
    })
    .catch((error) => {
      console.log(error)
      res.status(400);
    })
});


app.listen(port, () => console.log(`Ay dawg, Crypto listening on port ${port}!`))