function getNetworkStatus() {
    let text;
    if(navigator.onLine) {
        text='Application is online';
    }
    else {
        text='Application is offline';
    }
    document.getElementById('result').innerHTML=text;
}

function checkCookieEnabled() {
    let text;
    if(navigator.cookieEnabled) {
        text='Cookie Enabled!';
    }
    else {
        text='Cookie Disabled!';
    }
    document.getElementById('result').innerHTML=text;
}

function checkLanguage() {
    let text=navigator.languages;
    document.getElementById('result').innerHTML=text;
}