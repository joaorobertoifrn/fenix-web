const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
const port = process.env.port || 3000;

app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.listen(port, () => {
    console.log("Servidor Rodando na porta : "+ port);
});
