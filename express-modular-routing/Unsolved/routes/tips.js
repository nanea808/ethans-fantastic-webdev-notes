const tipRouter = require('express').Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');
const uuid = require('../helpers/uuid');

// Line 1 is KEY ^

//Routes
// GET Route for retrieving all the tips
tipRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for a new UX/UI tip
  tipRouter.post('/', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
  
    const { username, topic, tip } = req.body;
  
    if (req.body) {
      const newTip = {
        username,
        tip,
        topic,
        tip_id: uuid(),
      };
  
      readAndAppend(newTip, './db/tips.json');
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });

// Expport our routes
module.exports = tipRouter;