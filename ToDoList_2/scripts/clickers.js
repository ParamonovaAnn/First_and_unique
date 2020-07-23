var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closebtn");
var overlay = document.getElementById("overlay");

export function keypress(callback) {
  // Add todo element to todo list
  input.addEventListener("keypress", function (key) {
    if (key.which === 13) {
      var li = document.createElement("li");
      var spanElement = document.createElement("span");
      var icon = document.createElement("i");

      var newTodo = this.value;
      this.value = "";

      icon.classList.add("fas", "fa-trash-alt");
      console.log(icon.classList);
      spanElement.append(icon);
      ul.appendChild(li).append(spanElement, newTodo);

      callback();
    }
  });
}

export const ul_checked = () => {
  ul.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  });
};

export const pencil_show_hide = () => {
  pencil.addEventListener("click", function () {
    input.classList.toggle("display");
  });
};

export const tips = () => {
  tipsBtn.addEventListener("click", function () {
    overlay.style.height = "100%";
  });
};

export const close = () => {
  closeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.height = "0";
  });
};

export const clear_todo = () => {
  // Clear all todos on click Clear button
  clearBtn.addEventListener("click", function () {
    ul.innerHTML = "";
  });
};

export const save_todo = () => {
  saveBtn.addEventListener("click", function () {
    localStorage.setItem("todoList", ul.innerHTML);
    console.log(localStorage);
  });
};