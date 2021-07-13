function getURL() {
    document.getElementById('result').innerHTML=
    'Current URL : '+location.href+'<br>'+
    'Current origin : '+location.origin+'<br>'+
    'Current pathname : '+location.pathname+'<br>'+
    'Current port : '+location.port+'<br>'+
    'Current host : '+location.host+'<br>'+
    'Current hostname : '+location.hostname+'<br>'+
    'Current search : '+location.search+'<br>'+
    'Current hash : '+location.hash;
}

function newPageAssign() {
    location.assign('https://www.nitkkr.ac.in');
    //location.href='http://www.nitkkr.ac.in'
}

//  The difference from the assign() method and setting the href property is that after using replace() the current page will not be saved in session History

function newPageReplace() {
    location.replace('https://www.nitkkr.ac.in');
}

function reloadPage() {
    location.reload();
}