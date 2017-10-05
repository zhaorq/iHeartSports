const routes = require('express').Router();
const path = require('path');
const fs = require('fs');

routes.get('/data', (req, res) => {
  fs.readFile(path.join(__dirname, './seed.json'), 'utf8', (err, data) => {
    if (err) throw err;
    if (data === "") data = {};
    res.status(200).send(JSON.stringify(data));
  });
});

routes.post('/data', (req, res) => {
  fs.readFile(path.join(__dirname, './seed.json'), 'utf8', (err, data) => {
    if (err) throw err;
    data = data === "" ? {} : JSON.parse(data);
    fs.writeFile(path.join(__dirname, './seed.json'), JSON.stringify(Object.assign(data, req.body)), (err) => {
      if (err) throw err;
      res.sendStatus(200);
    });
  });
});

module.exports = routes;