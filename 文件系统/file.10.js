var fs=require("fs");
console.log("读取 test目录");
fs.readdir('test/',function(err,files){
    if(err){
        return console.error(err);
    }
    files.forEach(function(file){
        console.log(file);
    });
});