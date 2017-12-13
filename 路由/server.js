var http=require("http");
var url=require("url");
function start(route){
    function onRequst(request,response){
        var pathname=url.parse(request.url).pathname;
        console.log("Request for"+pathname+"received.");
        route(pathname);
        response.writeHead(200,{"content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequst).listen(8888);
    console.log("Server has started");
}
exports.start=start;