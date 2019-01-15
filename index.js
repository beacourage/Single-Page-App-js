console.log(“I’m here”)

function init() {

var button = document.getElementById(‘turn_pink’)
button.addEventListener(“click”, function() {
  console.log(“hello”);
  var top_div = document.getElementById(“top”);
  top_div.style.background = “pink”

})

}

window.onload = init;
