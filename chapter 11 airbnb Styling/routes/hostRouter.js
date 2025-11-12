const path= require('path');
const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/add-home",(req, res, next)=>{
  console.log(req.url, req.method);
  // res.send(`<h1> Regester your home here</h1>
  //          <form action="/host/add-home" method="POST" >
  //          <input type"text  name="house name "  placeholder="enter your house name "/>

  //         <input type="submit" />
          
  //         </form>`);
  res.sendFile(path.join(__dirname, '../', 'views','add-home.html'));

})

hostRouter.post("/host/add-home",(req, res, next)=>{
  console.log(req.body);
  console.log(req.url, req.method);
  // res.send(`<h1> home register successfully </h1>
  //              <a href="/"> Go to home </a>`);
  res.sendFile(path.join(__dirname, '../', 'views','homeAdded.html'));

})



module.exports = hostRouter;