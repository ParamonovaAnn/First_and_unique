import { keypress, ul_checked, pencil_show_hide, save_todo, clear_todo, tips, close, fun } from "./clickers.js";
import { cat_facts } from "./cat_facts.js";

// Document ready
$(document).ready(() => {
  var spans = document.getElementsByTagName("span");
  var ul = document.querySelector("ul");
  var ul_cat_facts = document.querySelector('.cat-facts');

  // Initialize event listeners
  keypress(deleteTodo);
  ul_checked();
  pencil_show_hide();
  save_todo();
  clear_todo();
  tips();
  close();
  fun();

  // Load cat facts data
  cat_facts("https://cat-fact.herokuapp.com/facts/random?animal_type&amount=3")
    .done(data => {
      console.log(data);
      setFactsData(data);
    })
    .fail(err => {
      console.log(err);
    })

  function setFactsData(cat_facts) {
    cat_facts.map(elem => {
      let li = document.createElement('li');
      li.innerText = elem.text;
      ul_cat_facts.append(li);
    })
    console.log(ul_cat_facts);
  }

  // Delete todo if delete span clicked
  function deleteTodo() {
    for (let span of spans) {
      span.addEventListener("click", function () {
        console.log(span.parentElement);
        span.parentElement.remove();
      });
    }
  }

  function loadTodos() {
    if (localStorage.getItem("todoList")) {
      ul.innerHTML = localStorage.getItem("todoList");
    }
  }

  deleteTodo();
  loadTodos();
});