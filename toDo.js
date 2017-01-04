// JavaScript File
var todo = document.getElementById('todolist'),
  form = document.getElementById('myform'),
  field = document.getElementById('newitem');

var options = document.getElementById('options');
var newitem = document.getElementById('newitem');


form.addEventListener('submit', function(evt) {
  var text = field.value;

  if (options.value == "none") {
    todo.innerHTML += '<div>' + text + '</div>';
  }
  else if (options.value == "underline") {
    todo.innerHTML += '<div style="text-decoration:underline">' + text + '</div>';
  }
  else if(options.value == "italics") {
    todo.innerHTML += '<div style="font-style: italic">' + text + '<div>';
  }
  else if(options.value == "highlight") {
    todo.innerHTML += '<div style="color: Yellow">' + text + '<div>';
  }

  evt.preventDefault();
}, false);

todo.addEventListener('click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);
