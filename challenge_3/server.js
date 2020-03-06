const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.use(express.static('public'))

// app.get('/prices' (req, res) => {});


app.listen(port, () => console.log(`Ay dawg, Bowling on port ${port}!`))