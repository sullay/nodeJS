var buf=Buffer.alloc(256);
var len=buf.write("www.baidu.com");
console.log("写入字节数："+len);