// 3 ways to get element attributes

function getAttribute() {
    var link=document.querySelector('a');
    document.getElementById('result').innerHTML=
    'href attribute : '+link.getAttribute('href')+
    '<br>target attribute : '+link['target']+
    '<br>id attribute : '+link.id;
}

document.querySelector('button').addEventListener('click', getAttribute);