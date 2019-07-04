var choosen='X';
var player;
var score1=0;
var score2=0;

function startGame(){
    document.getElementById('test').innerHTML='Player 1: X. Make your move!';   
}

var gameIsFinished=false;

function returnSelected(t){
  if(gameIsFinished){
    alert('Game is finished. Press "Click to play again!"');
    return;
  }  

  if(t.innerHTML==''){
    t.innerHTML=choosen;
    var r=document.getElementById('game-table').querySelectorAll('tr');
    for(var i=0;i<r.length;i++){
      var c=r[i].querySelectorAll('td');
      if(c[0].innerHTML==c[1].innerHTML && c[0].innerHTML==c[2].innerHTML && c[0].innerHTML!=''){
        gameIsFinished=true;
        alert('You have won '+player);
        updateScore();
        return;
      }
    }

    var d=document.getElementById('game-table').querySelectorAll('td');
    for(var j=0;j<3;j++){
      if(d[j].innerHTML==d[j+3].innerHTML && d[j].innerHTML==d[j+6].innerHTML && d[j].innerHTML!=''){
        gameIsFinished=true;
        alert('You have won '+player);
	updateScore();
        return;
      }    
     }
    
    if((d[0].innerHTML==d[4].innerHTML && d[0].innerHTML==d[8].innerHTML && d[0].innerHTML!='')||
       (d[2].innerHTML==d[4].innerHTML && d[2].innerHTML==d[6].innerHTML && d[2].innerHTML!='')){
         gameIsFinished=true;
         alert('You have won '+player);
         updateScore();
         return;
      }
    
  }else if(t.innerHTML!=''){
          alert('Choose an empty box!');
  }  

 if(allBoxFilled()){
    alert("Game Over! No player won: start again.");
 } 

 swichPlayer();
}

function swichPlayer(){
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

function updateScore(){
  document.getElementById('score-table').querySelectorAll('td')[0].innerHTML=score1;
  document.getElementById('score-table').querySelectorAll('td')[1].innerHTML=score2;
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

function resetButton(){
  var r=document.getElementById('game-table').querySelectorAll('td');
  for(var i=0;i<r.length;i++){
    r[i].innerHTML='';
    gameIsFinished=false;
  }
}

