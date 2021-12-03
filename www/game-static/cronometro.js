var min = 0;
var seg = 0;
var cron;
function iniciar() {
    var cron = setInterval(() => { timer() }, 1000)

}
function parar() {
    clearInterval(cron)

    min = 0;
    seg = 0;
    document.getElementById('cron').innerHTML = "00:00"


}
function timer() {

    seg++
    if (seg == 60) {
        seg = 0
        min++
    }


    var format = (min < 10 ? "0" + min : min) + ":" + (seg < 10 ? "0" + seg : seg)
    document.getElementById('cron').innerHTML = format
}
