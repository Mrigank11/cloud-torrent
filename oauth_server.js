var http=require('http');
http.createServer(function(req,resp){
  resp.end('HI');
}).listen(8080);
