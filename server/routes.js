const routes = require('express').Router();
const path = require('path');
const fs = require('fs');

routes.get('/data', (req, res) => {
  fs.readFile(path.join(__dirname, './seed.json'), 'utf8', (err, data) => {
    if (err) throw err;
    if (data === "") data = {}; //start off a JSON file with at least an empty object
    res.status(200).send(JSON.stringify(data));
  });
});

routes.post('/data', (req, res) => {
  /*When user edit the content, we want to keep the part in the existing file that didn't
  change and update with the new entries. Hence, here we read file and take the existing 
  data, merge with the new data (=req.body) through the Object.assign function, handle error,
  or send a success status. 
  */
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