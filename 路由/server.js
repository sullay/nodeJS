var http=require("http");
var url=require("url");
function start(){
    function onRequst(request,response){
        var pathname=url.parse(request.url).pathname;
        console.log("Request for"+pathname+"received.");
        response.writeHead(200,{"content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequst).listen(8888);
    console.log("Server has started");
}
exports.start=start;