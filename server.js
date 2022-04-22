const http = require('http');
const fs = require('fs');
const lodash = require('lodash');
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    res.setHeader("Content-Type", "text/plain");
  /*  res.write('<head><link rel="styleseet" href= "#"></head>');
    res.write("<p>Hello guys</p>");
    res.write("<p>Hello guys, bye bye</p>");*/
    //send html file
    let path = "./view";
    switch(req.url)
    {
        case '/':
            path+= 'server.html';
            res.statusCode = 200;
            break;
        case '/about':
            path+= 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += "404.html";
            break;
    }
fs.readFile('./node_modules/sp4/node.js.task2/view/server', (err, data) => {
      if (err) {
    console.log(err);
    res.end();
  } else{
  res.write(data);
  res.end(data);
  }
})

});

server.listen(3000, 'localhost', ()=>{
    console.log("listening....")
});
