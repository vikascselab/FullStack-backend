const http= require('http');

// function requeatListner(req,res){
//   console.log(req);
// }
// http.createServer(requeatListner);
   const server=http.createServer((req,res)=>{
  console.log(req );
//  process.exit();
});

// server.listen(3000);

const PORT=3000;
server.listen(PORT,()=>{
  console.log(`server running on address https://localhost:${PORT}`);
})