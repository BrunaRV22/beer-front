const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(`${__dirname}/www/`));

app.get('/*', (_, res) => {
    res.sendFile(path.join(`${__dirname}/www/index.html`));
});

app.listen(PORT, () => console.log(`Angular iniciado na porta ${PORT}`));
