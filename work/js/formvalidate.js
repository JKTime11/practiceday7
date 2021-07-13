function validate() {
    let x=document.getElementById('num').value;

    let text;
    if(isNaN(x) || x<1 || x>10) {
        text='Input is not valid';
    }
    else {
        text='Input is OK';
    }

    document.getElementById('result').innerHTML=text;
}