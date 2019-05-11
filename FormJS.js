document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#form").onsubmit = function(){
    var nombre = document.querySelector("#name").value
    alert(nombre)
  }
})
