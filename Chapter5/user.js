
const fs=require('fs');
const { buffer, json } = require('stream/consumers');

const reqHandler= (req, res) => {
  console.log(req.url, req.method, req.headers);

  // Set proper content type (case matters)
  if (req.url==='/') {
    res.setHeader('Content-Type', 'text/html');

  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body>');
  res.write('<h1>Enter your details</h1>');
  res.write('<form action="/submit" method="POST">');
  res.write('<input type="text" name="username" placeholder="Enter your name">');
  res.write('<input type="submit" value="Submit">');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');


  return res.end();
   
  }else if (req.url.toLowerCase()=="/submit" && req.method=="POST") {
    const body=[];
    req.on('data', (chunk)=>{
      console.log(chunk);
      body.push(chunk);
    })

    req.on('end',()=>{
     const fullbody= Buffer.concat(body).toString();
     console.log(fullbody);
   const params=  new URLSearchParams(fullbody);
  //  const bodyobject={};
  //  for(const [key, val] of params.entries()){
  //   bodyobject[key]=val;
  //  }
  const bodyobject=Object.fromEntries(params);
   console.log(bodyobject);
    fs.writeFileSync('user.text',JSON.stringify(bodyobject));
    })
  
   res.statusCode=302;
   res.setHeader('Location', '/');
   
  }
 
};

module.exports=reqHandler;

