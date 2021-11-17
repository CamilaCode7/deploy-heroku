const express = require('express');

const app = express();

app.get('/', (req, res) => {
    req.statusCode(200).send('Esta vivo')  
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});