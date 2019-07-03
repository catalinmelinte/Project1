/*function choose(){
  var a=button.getAttribute('id');
  if(a=='x'){
    document.getElementById('test').innerHTML='You have choosen '+a+'. Make your first move!';
    
  }else if(a=='o'){
    document.getElementById('test').innerHTML='You have choosen '+a+'. Make your first move!';
 
  }
}*/

var choosen='';

function chooseX(){
  choosen='X';
  document.getElementById('test').innerHTML='You have choosen '+choosen+'. Make your first move!';
}

function chooseO(){
  choosen='O';
  document.getElementById('test').innerHTML='You have choosen '+choosen+'. Make your first move!';
}


function returnSelected(t){
  t.innerHTML=choosen;
}
  
function resetButton(){
  var r=document.querySelectorAll('td');
  for(var i=0;i<r.length;i++){
    r[i].innerHTML='';
  }
}