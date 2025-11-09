const http= require('http');

// function requeatListner(req,res){
//   console.log(req);
// }
// http.createServer(requeatListner);
   const server=http.createServer((req,res)=>{
  console.log(req.url, req.method ,req.headers );

  if (req.url==='/') {
     res.setHeader('Content-Type','Text/Html');
  res.write('<Html>');
  res.write('<head><title>my first page </title></head>');
  res.write('<body><h1>Welcome to home page </h1></body>');
   res.write('</Html>');
   return res.end();
    
  }else if (req.url==='/Product') {
     res.setHeader('Content-Type','Text/Html');
  res.write('<Html>');
  res.write('<head><title>my first page </title></head>');
  res.write('<body><h1>checkout product </h1></body>');

  res.write('</Html>');
  return   res.end();
    
  }
  res.setHeader('Content-Type','Text/Html');
  res.write('<Html>');
  res.write('<head><title>my first page </title></head>');
  res.write('<body><h1>like and subscribe </h1></body>');
  
  res.write('</Html>');
   res.end();
//  process.exit();
});

// server.listen(3000);

const PORT=3000;
server.listen(PORT,()=>{
  console.log(`server running on address https://localhost:${PORT}`);
})