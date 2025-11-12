const path= require('path');

// external
const express = require('express');
// local
const userRouter= require("./routes/userRouter");
//local
const hostRouter= require("./routes/hostRouter");
const rootdir= require("./utils/pathUtil");

const app = express();


app.use("/",(req, res, next)=>{
  console.log(req.url, req.method);
 next();
 
})

app.use(express.urlencoded());
app.use(userRouter);
app.use( hostRouter);


app.use((req, res, next)=>{
  res.status(404).sendFile(path.join( rootdir, 'views','404.html'));
})


// app.get("/",(req, res, next)=>{
//   console.log(req.url, req.method);
//   res.send(`<h1> Welcome to airban</h1>
//             <a href="/host/add-home">Add Home</a>`);

// })

// app.get("/host/add-home",(req, res, next)=>{
//   console.log(req.url, req.method);
//   res.send(`<h1> Regester your home here</h1>
//            <form action="/host/add-home" method="POST" >
//            <input type"text  name="house name "  placeholder="enter your house name "/>

//           <input type="submit" />
          
//           </form>`);

// })

// app.post( "/host/add-home",(req, res, next)=>{
//   console.log(req.body);
//   console.log(req.url, req.method);
//   res.send(`<h1> home register successfully </h1>
//                <a href="/"> Go to home </a>`);

// })


const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});