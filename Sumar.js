document.addEventListener("DOMContentLoaded", ejecutar)

function ejecutar(){
	document.querySelector("#sumar").onclick = sumar;
	document.querySelector("#restar").onclick = restar;
}


let n = 0;

function sumar(){
  n++;
  document.querySelector('#n').innerHTML = n;
}

function restar(){
  n--
  document.querySelector('#n').innerHTML = n;
}
