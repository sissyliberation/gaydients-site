const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const chalk = require('chalk-rainbow');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname));

if (process.env.NODE_ENV === "production") {
  const prodPath = '/client/build/';
  app.use(favicon(__dirname + `${prodPath}/favicon.ico`));

  app.use(express.static(path.join(__dirname, prodPath)));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, `${prodPath}index.html`));
  });
}

app.listen(port, () => console.log(chalk(`listening on port ${port}`)));
