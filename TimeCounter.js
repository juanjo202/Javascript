document.addEventListener("DOMContentLoaded", function(){
  var counter = 0
  setInterval(count, 1000)

  function count(){
    counter++
    document.querySelector("h1").innerHTML = counter
  }
})
