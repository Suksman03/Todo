const toggle = document.getElementById("toggle");
const swit = document.getElementById("switch");
const todo = document.getElementById("todo");
const off = document.getElementById("off");
const form = document.getElementById("forms");
const ip = document.getElementById("ip");
const tasks = document.getElementById("tasks");
const text = document.getElementById("text");

off.addEventListener('click',() =>{
 if(off.classList.contains('on')){
    off.classList.remove('on');
    off.classList.add('off');
    swit.style.backgroundColor = "white";
    todo.style.backgroundColor = "white"
    form.style.backgroundColor = " rgb(255, 122, 251)"
    ip.style.backgroundColor = "white"
    tasks.style.backgroundColor = "white"
    text.style.color = "black";
 }else{
    off.classList.add('on');
    off.classList.remove('off');
    swit.style.backgroundColor = "#354151";
    todo.style.backgroundColor = "#374151"
    form.style.backgroundColor = "#6B7280"
    form.style.boxShadow = "none"
    ip.style.backgroundColor = "#111827"
    tasks.style.backgroundColor = "#111827"
    text.style.color = "white";
 }
 
})