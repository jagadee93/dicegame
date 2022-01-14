function dicec(){
  var player1=Math.random()*6+1;
  player1=Math.floor(player1);
  var player2=Math.random()*6+1;
  player2=Math.floor(player2);
  var img1= "dice"+player1+".png";
  var img2= "dice"+player2+".png";
  var rand_Img1 ="images/"+img1;
  var rand_Img2 ="images/"+img2;
  document.querySelectorAll("img")[0].setAttribute("src",rand_Img1);
  document.querySelectorAll("img")[1].setAttribute("src",rand_Img2)
  if(player1===player2){
      document.querySelector('h1').innerText="match draw ";
    }else if (player1>player2){
      document.querySelector('h1').innerText="🚩player 1 Wins";
    }else{
      document.querySelector('h1').innerText="player 2 wins🚩 ";
    }
}
window.onload =dicec();
