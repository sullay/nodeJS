var fs=require("fs");
fs.stat('C:/Users/11815/Documents/nodeJS/文件系统/input.txt',function(err,stats){
    console.log(stats.isFile());
});