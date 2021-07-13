function getScreenSize() {
    document.getElementById('result').innerHTML=
    "Screen Width : "+screen.width+'<br>'+
    "Screen Height : "+screen.height+'<br>'+
    "Screen availableWidth : "+screen.availWidth+'<br>'+
    "Screen availableHeight : "+screen.availHeight+'<br>'+
    "Screen pixelDepth : "+screen.pixelDepth+'<br>'+
    "Screen colorDepth : "+screen.colorDepth;
}