var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var lists = document.querySelectorAll("li");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closebtn");
var overlay = document.getElementById("overlay");


function deleteTodo() {
    for (let span of spans) {
        span.addEventListener("click", function () {
            span.parentElement.remove();
        })
    }
}

function loadTodos() {
    console.log(parseInt(localStorage.getItem("todoList")))
    if (parseInt(localStorage.getItem("todoList"))!=0) {
        ul.innerHTML = localStorage.getItem("todoList")
    } 
}

function inputListener(input) {
    if (event.which === 13 && input.value.replace(' ', '').length > 0) {
        var li = document.createElement('li');
        var spanElement = document.createElement('span');
        var icon = document.createElement('i');
    
        var newTodo = input.value;
        input.value = ""
    
        icon.classList.add("fas", "fa-trash-alt");
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);
    
        deleteTodo();
    }
}

ul.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }
})

function clickClearBtn() {
    ul.innerHTML = ""
    localStorage.setItem("todoList", 0)
}

function clickSaveBtn() {
    localStorage.setItem("todoList", ul.innerHTML)
}

function clickPencil() {
    input.classList.toggle("display")
}

function clickTipsBtn() {
    overlay.style.height = '100%'
}

function clickCloseBtn() {
    overlay.style.height = '0'
}

deleteTodo();

loadTodos();