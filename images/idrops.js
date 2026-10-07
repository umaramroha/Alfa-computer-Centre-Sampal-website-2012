for (var i = 1; i <= 10; i++) {
    var w = Math.floor(Math.random() * 100);
    document.write('<marquee id="m' + i + '" direction="down" style="width:' + w + 'px;height:300px"><img src="images/logo.png" width="' + w + '"></marquee>');
}
function f() {
    for (var i = 1; i <= 10; i++) {
        var el = document.getElementById('m' + i);
        if (el) {
            el.scrollamount = Math.floor(Math.random() * 10);
            el.scrolldelay = Math.floor(Math.random() * 100);
            var w = Math.floor(Math.random() * 100);
            el.style.width = w + 'px';
        }
    }
}
window.setInterval(f, 4000);
