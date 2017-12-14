var fs=require("fs");
console.log("准备删除 test目录");
fs.rmdir('test/',function(err){
    if(err){
        return console.error(err);
    }
    console.log("读取 test目录");
    fs.readdir('test/',function(err,files){
        if(err){
            return console.error(err);
        }
        files.forEach(function(file){
            console.log(file);
        });
    });
});