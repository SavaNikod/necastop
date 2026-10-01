var input = document.getElementById("st");
var button=document.getElementById("b");
var p = document.getElementById("output");

button.addEventListener("click",function(){
p.innerHTML=input.value;
});
