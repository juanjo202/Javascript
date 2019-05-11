document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#Red').onclick = red;
  document.querySelector('#Green').onclick = green;
  document.querySelector('#Blue').onclick = blue;

  function red(){
    document.querySelector('#Hello').style.color = 'red';
  }

  function green(){
    document.querySelector('#Hello').style.color = 'green';
  }

  function blue(){
    document.querySelector('#Hello').style.color = 'blue';
  }
})
