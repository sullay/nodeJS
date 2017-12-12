var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

// targetBuffer - 要拷贝的 Buffer 对象。

// targetStart - 数字, 可选, 默认: 0

// sourceStart - 数字, 可选, 默认: 0

// sourceEnd - 数字, 可选, 默认: buffer.length

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2, 1, 2);

console.log(buf1.toString());