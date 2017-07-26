var y1 = 2;
var y2 = 2;
var hp1 = 10;
var hp2 = 10;
var rnd = Math.floor(Math.random()*2+1);
var mp1 = Math.floor(Math.random()*2+1);
var mp2 = Math.floor(Math.random()*2+1);

function death(){
  document.getElementById('no').play()
}

function die(classe){
  switch (classe) {
    case 'mago':
      document.getElementById('fireball').play()
      break;
    case 'warrior':
     document.getElementById('morra').play();
     break;
    default:
     document.getElementById('morra').play()
  }
}

function func1(){

  document.getElementById('x').innerHTML = y1
}
function func2(){

  document.getElementById('y').innerHTML = y2
}

function atack1(){
  document.getElementById('ho').play();
  hp2 = hp2 - y1;
  document.getElementById('hp2').innerHTML = hp2;
  round();
  if (hp2 < 1) {
    death();
    alert('Player 2 foi derrotado ');
    window.location.reload();
  }
}

function atack2(){
  document.getElementById('ro').play();
  hp1 = hp1 - y2;
  document.getElementById('hp1').innerHTML = hp1;
  round();
  if (hp1 < 1) {
    death();
    alert('Player 1 foi derrotado ');
    window.location.reload()
  }
}
function class1(){
class1 = document.getElementById('class1').value
switch (class1) {
  case 'guerreiro':
    hp1 = hp1 + 1;
    document.getElementById('hp1').innerHTML = hp1;
    document.getElementById('img1').src = "img/warrior.png";
    document.getElementById('img1').style.width = '30%';
    break;
  case 'mago':
    y1 = y1 + 1
    document.getElementById('x').innerHTML = y1;
    document.getElementById('img1').src = 'img/mage.png';
    document.getElementById('img1').style.width = '30%';
    break;
  default:

}
}
function class2(){
class2 = document.getElementById('class2').value
switch (class2) {
  case 'guerreiro':
    hp2 = hp2 + 1
    document.getElementById('hp2').innerHTML = hp2;
    document.getElementById('img2').src = "img/warrior.png";
    document.getElementById('img2').style.width = '30%';
    break;
  case 'mago':
    y2 = y2 + 1
    document.getElementById('y').innerHTML = y2;
    document.getElementById('img2').src = 'img/mage.png';
    document.getElementById('img2').style.width = '30%';
    break;
  default:

}
}
function round(){
switch (rnd) {
  case 1:
  alert('Player 1s Turn');
  document.getElementById('b1').style.display = 'none';
  document.getElementById('b2').style.display = 'block';
  rnd = 2
    break;
  case 2:
  alert('Player 2s Turn');
  document.getElementById('b2').style.display = 'none';
  document.getElementById('b1').style.display = 'block';
  rnd = 1
  break;
  default:
alert('?')
}
}

function special1(){
  switch (class1) {
    case 'mago':
      document.getElementById('s1').value = 'FIREBALL!!!!';
      if (mp1>0) {
        die(class1);
        mp1 = mp1 - 1;
        hp2 = hp2 - 3;
        document.getElementById('hp2').innerHTML = hp2;
        if (hp2 < 1) {
          death();
          alert('Player 2 foi derrotado ');
          window.location.reload();
        }

      }
      else {
        alert('Baixa MP')
        round();
      }
      break;
    case 'guerreiro':
    document.getElementById('s1').value = 'LÂMINA SEDENTA!';
    if (mp1>0){
      document.getElementById('morra').play()
      mp1 = mp1 - 1;
      hp2 = hp2 - 1;
      document.getElementById('hp2').innerHTML = hp2;
      hp1 = hp1 + 1
      document.getElementById('hp1').innerHTML = hp1;
      if (hp2 < 1) {
        death();
        alert('Player 2 foi derrotado ')
        window.location.reload()
      }
      round();
    }
    else {
      alert('Baixa MP')
      round();
    }
    break;
    default:

  }
}


function special2(){
  switch (class2) {
    case 'mago':
      document.getElementById('s2').value = 'FIREBALL!!!!';
      if (mp2>0) {
        die(class2);
        mp2 = mp2 - 1;
        hp1 = hp1 - 3;
        document.getElementById('hp1').innerHTML = hp1;
        if (hp1 < 1) {
          death();
          alert('Player 1 foi derrotado ')
          window.location.reload()
        }

      }
      else {
        alert('Baixa MP')
        round();
      }
      break;
    case 'guerreiro':
    document.getElementById('s2').value = 'LÂMINA SEDENTA!';
    if (mp2>0){
      document.getElementById('morra').play()
      mp2 = mp2 - 1;
      hp1 = hp1 - 1;
      document.getElementById('hp1').innerHTML = hp1;
      hp2 = hp2 + 1
      document.getElementById('hp2').innerHTML = hp2;
      if (hp1 < 1) {
        death();
        alert('Player 1 foi derrotado ')
        window.location.reload()
      }
      round();
    }
    else {
      alert('Baixa MP')
      round();
    }
    break;
    default:

  }
}
function sound(){
  switch (class1) {
    case 'guerreiro':
      switch (class2) {
        case 'guerreiro':
          document.getElementById('wxw').play()
          break;
        case 'mago':
        document.getElementById('wxm').play()
        break;
        default:

      }
      break;
      case 'mago':
      switch (class2) {
        case 'mago':
          document.getElementById('mxm').play()
          break;
        case 'guerreiro':
        document.getElementById('mxw').play()
        default:

      }
    default:

  }
}

function start(){
  func1();
  func2();
  class1();
  class2();
  sound();
  round();
  document.getElementById('ALL').hidden = "True";
}
