const fs = require('fs');
const https = require('https');

const express = require('express');
const routes = require('./routes')

const app = express();

const port = 4000;

routes(app)

app.listen(port, ()=> console.log(`O servidor esta rodando na porta ${port}`));

https.createServer({
    cert: fs.readFileSync('api/SSL/fullchain.pem'),
    key: fs.readFileSync('api/SSL/privkey.pem')
}, app).listen(4001, ()=> console.log('Rodando em https'));



module.exports = app