function insertElement() {
    var para=document.createElement('p');
    para.innerHTML='This is dynamically created paragraph';
    para.style.border='2px dotted blue';
    document.getElementById('main').appendChild(para);
}