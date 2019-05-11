document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#form").onsubmit = function(){

    const request = new XMLHttpRequest()
    const currency = document.querySelector("#currency").value
    request.open("POST", "/convert")

    request.onload = function(){
      const data = JSON.parse(request.responseText)

      if (data.success) {
        const contest = "1 USD is squal to "+ data.rate + " " + currency
        document.querySelector("#result").innerHTML = contest
      }
      else {
        document.querySelector("#result").innerHTML = "There was an error."
      }
    }

    const data = new FormData();
    data.append('currency', currency);

    request.send(data);
    return false;
  }
})
