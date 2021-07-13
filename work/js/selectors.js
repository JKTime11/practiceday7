document.body.style.background='aqua';

document.getElementById('result').innerHTML=
document.documentElement.getAttribute('lang')+'<br>'+
document.head.firstElementChild.tagName;


// forEach can have item, index and array as callback parameters
// first convert nodeList to array
Array.from(document.getElementsByClassName('cls')).forEach(function(div, index) {
    div.innerHTML="Got the div no. "+(index+1)+"!";
    div.style.color='red';
    div.style.opacity=Math.random();
    console.log(arr)
})