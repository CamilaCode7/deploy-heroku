const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Esta vivo!!!'

app.get('/', (_req, res) => {
    res.send(message + ' E o Procfile também!!! =D'); 
});

app.listen(port);
console.log(`Server started on ${port}`);