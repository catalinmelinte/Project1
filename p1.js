var choosen='X';

function startGame(){
    document.getElementById('test').innerHTML='Player 1: X. Make your move!';
}

var gameIsFinished=false;

function allBoxFilled(){
    var allBoxFilled=true;
    var c=document.querySelectorAll('td');
    for(var i=0;i<c.length;i++){
      if(c[i].innerHTML==''){
      allBoxFilled=false;
      }
    }
    return allBoxFilled;
  } 

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

    var d=document.querySelectorAll('td');
    for(var j=0;j<3;j++){
      if(d[j].innerHTML==d[j+3].innerHTML && d[j].innerHTML==d[j+6].innerHTML && d[j].innerHTML!=''){
        alert('You have won!');
        gameIsFinished=true;
        return;
      }    
     }
    
    if((d[0].innerHTML==d[4].innerHTML && d[0].innerHTML==d[8].innerHTML && d[0].innerHTML!='')||
       (d[2].innerHTML==d[4].innerHTML && d[2].innerHTML==d[6].innerHTML && d[2].innerHTML!='')){
         alert('You have won!');
         gameIsFinished=true;
         return;
      }
    
  }else if(t.innerHTML!=''){
          alert('Choose an empty box!');
        }  

 if(allBoxFilled()){
    alert("Game Over! No player won: start again.")
  } 

 if(choosen=='X'){
   choosen='O'; 
   document.getElementById('test').innerHTML='Player 2: O. Make your move!'
 }else if(choosen=='O'){
    choosen='X';
    document.getElementById('test').innerHTML='Player 1: X. Make your move!';
 }
}
  

function resetButton(){
  var r=document.querySelectorAll('td');
  for(var i=0;i<r.length;i++){
    r[i].innerHTML='';
    gameIsFinished=false;
  }
}