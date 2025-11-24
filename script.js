const cube = document.getElementById('cube');

function rollDice(){
  const result = Math.floor(Math.random()*6)+1;
  let x=0,y=0;
  switch(result){
    case 1: x=0; y=0; break;
    case 2: x=90; y=0; break;
    case 3: x=0; y=-90; break;
    case 4: x=0; y=90; break;
    case 5: x=-90; y=0; break;
    case 6: x=180; y=0; break;
  }
  // Animación con vueltas extra
  cube.style.transform = `rotateX(${x+1080}deg) rotateY(${y+1080}deg)`;
  setTimeout(()=>alert("Salió: "+result),2000);
}
