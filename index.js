const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");

  res.writeHead(200, {'Content-Type':"text/html" })

  //res.end(JSON.stringify({title: "mandile", age: 12}));
  //res.end(__dirname);
  //res.end(__filename);

  // fs.readFile('index.html', (err, content) =>{
  //   if(err){
  //     res.end("cannot read the file");
  //   }
  //   res.end(content);
  // });

  //res.end( path.join(__dirname, 'templates', 'index.html') );

  fs.readFile(path.join(__dirname, 'templates', req.url) , (err, content) =>{
    if(err){
      res.end("cannot read the file");
    }
    res.end(content);
  });



});

server.listen(PORT, HOST, ()=>{
  console.log("server is running");
});
