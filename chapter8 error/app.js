const http = require('http');
const reqHandler=require('./syntex');
const server = http.createServer((req,res)=>{
  console.log(req.url, req.method);
  reqHandler();

}
);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
