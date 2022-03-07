var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.getElementById("ul");

button.addEventListener('click',function(){
    var li= document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value='';
})

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body= document.getElementById("body");

color1.addEventListener('input',function(){
    body.style.background=`linear-gradient(to right,${color1.value} ,${color2.value})`;
    // body.style.background=`linear-gradient(to right,${color1.value},${color1.value})`;
})
color2.addEventListener('input',function(){
    body.style.background=`linear-gradient(to right,${color1.value} ,${color2.value})`;
})