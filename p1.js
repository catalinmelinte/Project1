var choosen='';

function chooseX(){
  choosen='X';
  document.getElementById('test').innerHTML='You have choosen '+ choosen +'. Make your move!';
}

function chooseO(){
  choosen='O';
  document.getElementById('test').innerHTML='You have choosen '+ choosen +'. Make your move!';
}

var gameIsFinished=false;

function returnSelected(t){
  if(gameIsFinished){
    alert('Game is finished. Press "Click to play again!"');
    return;
  }  

  if(t.innerHTML==''){
    t.innerHTML=choosen;
    var r=document.querySelectorAll('tr');
    for(var i=0;i<r.length;i++){
      var c=r[i].querySelectorAll('td');
      if(c[0].innerHTML==c[1].innerHTML && c[0].innerHTML==c[2].innerHTML && c[0].innerHTML!=''){
        alert('You have won!');
	gameIsFinished=true;
        return;
      }
    }
 
  }else if(t.innerHTML!=''){
          alert('Choose an empty box!');  
        }  
}
  

function resetButton(){
  var r=document.querySelectorAll('td');
  for(var i=0;i<r.length;i++){
    r[i].innerHTML='';
    gameIsFinished=false;
  }
}