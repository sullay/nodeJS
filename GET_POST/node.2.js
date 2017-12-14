var http=require("http");
var querystirng=require('querystring');
var util=require('util');
var postHTML = 
'<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
'<body>' +
'<form method="post">' +
'网站名： <input name="name"><br>' +
'网站 URL： <input name="url"><br>' +
'<input type="submit">' +
'</form>' +
'</body></html>';
http.createServer(function(req,res){
    var body='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
      body=querystirng.parse(body);
      res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
      if(body.name&&body.url){
          res.write('网站名:'+body.name);
          res.write('<br>');
          res.write('网站url:'+body.url);
      }else{
          res.write(postHTML);
      }
      res.end();
    });
}).listen(3000);