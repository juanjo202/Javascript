document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#var').onclick = var123;
  document.querySelector('#let').onclick = let123;
})

function var123(){
  if (true) {
    var x = "Im a var";
  }
  alert(x)
}

function let123(){
  if (true) {
    let y = 'Im a let';
  }
  alert(y)
}
