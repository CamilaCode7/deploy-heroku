const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  req.statusCode(200).send('Esta vivo')  
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});