function xxx(x) {
    return function () {
        console.log(x);
        x++;
        if (x == 5) {
            clearInterval(t);
        }
    }
}
var t = setInterval(xxx(0), 1000);