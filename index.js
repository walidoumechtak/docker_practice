const express = require('express');

// int app
const PORT= 1337;
const app = express();

app.get('/', (req, res) => res.send('<h1>Start node app with docker</h1>'));

app.listen(PORT, () => console.log(`everything is runing in : ${PORT}`));