var choosen='X';
var player;
var score1=0;
var score2=0;

document.getElementById('score-table').querySelectorAll('td')[0].innerHTML=score1;
document.getElementById('score-table').querySelectorAll('td')[1].innerHTML=score2;   

function startResetGame(){
  document.getElementById('test').innerHTML='Player 1: X. Make your move!';
  var r=document.getElementById('game-table').querySelectorAll('td');
  for(var i=0;i<r.length;i++){
    r[i].innerHTML='';
    r[i].setAttribute('class','new');
    gameIsFinished=false;
  }
}

var gameIsFinished=false;

function returnSelected(t){
  if(gameIsFinished){
    alert('Game is finished. Press Start / Reset button.');
    return;
  }  

  if(t.innerHTML==''){
    t.innerHTML=choosen;
    if(checkWinner()){
      alert('You have won '+player+'. Press Start / Reset button.');
      updateScore();
      gameIsFinished=true;  
    }
  }else if(t.innerHTML!=''){
          alert('Choose an empty box!');
        }  

 if(allBoxFilled()){
    alert("Game Over! No player won: start again.");
 } 

 switchPlayer();
}

function switchPlayer(){
  if(choosen=='X'){
    choosen='O'; 
    player='Player 2';
    document.getElementById('test').innerHTML=player+' : O. Make your move!';
    return player;
  }else if(choosen=='O'){
     choosen='X';
     player='Player 1';
     document.getElementById('test').innerHTML=player+' : X. Make your move!';
     return player;
  }
}

function checkWinner(){
  var winningPosition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  var d=document.getElementById('game-table').querySelectorAll('td');
  for(var i=0;i<winningPosition.length;i++){
    var position=winningPosition[i];
    if(d[position[0]].innerHTML==d[position[1]].innerHTML && d[position[0]].innerHTML==d[position[2]].innerHTML && d[position[0]].innerHTML!=''){
      d[position[0]].setAttribute('class','win');
      d[position[1]].setAttribute('class','win');
      d[position[2]].setAttribute('class','win');
      return true;
    }
  } 
  return false;  
}


function updateScore(){
  var s=document.getElementById('score-table').querySelectorAll('td');
        if(player=='Player 1'){
          s[0].innerHTML=score1+1;
          score1++;
        } else if(player=='Player 2'){
            s[1].innerHTML=score2+1;
            score2++;
        }
}

function allBoxFilled(){
    var allBoxFilled=true;
    var c=document.getElementById('game-table').querySelectorAll('td');
    for(var i=0;i<c.length;i++){
      if(c[i].innerHTML==''){
      allBoxFilled=false;
      }
    }
    return allBoxFilled;
} 

