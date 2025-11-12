//core moudle

const path= require('path');
const express = require('express');
const userRouter = express.Router();
const rootdir= require("../utils/pathUtil");

userRouter.get('/', (req, res) => {
  console.log(req.url, req.method);
  // res.send(`
  //   <h1>Welcome to Airban Hotel portal</h1>
  //   <a href="/host/add-home">Add Home</a>
  // `);

  res.sendFile(path.join(rootdir, 'views','home.html'));
});

module.exports = userRouter;
