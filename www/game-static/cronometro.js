var min = 0;
var seg = 0;

var interval;
function iniciar() {

    interval = setInterval(() => {
        seg++
        if (seg == 60) {
            seg = 0
            min++
        }

        var format = (min < 10 ? "0" + min : min) + ":" + (seg < 10 ? "0" + seg : seg)
        document.getElementById('cron').innerHTML = format


    }, 1000)

}

function parar() {
    boo = false
    min = 0;
    seg = 0;

    document.getElementById('cron').innerHTML = "00:00"
    clearInterval(interval)

}



