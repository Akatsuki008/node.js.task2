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
    let path = "./views";
    switch(req.url)
    {
        case '/':
            path+= 'server.html';
            break;
        case '/about':
            path+= 'sabout.html';
            break;
        default:
            path += "404.html";
            break;
    }
fs.readFile('./views/server.html', (err, data) => {
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