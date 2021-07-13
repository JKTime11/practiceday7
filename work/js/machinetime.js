setInterval(interval, 2000);

function interval() {
    var d=new Date();
    document.getElementById('result').innerHTML='Current Time : '+d.toLocaleTimeString();
}