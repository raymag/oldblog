function guerreiro1(spell){
  switch (spell) {
    case 'sessao':
      if (mp1>0) {
        document.getElementById('sessao').play();
        mp1 = mp1 - 1;
        hp2 = hp2 - y1;
        document.getElementById('hp2').innerHTML = hp2;
        if (hp2<1){
          death()
          alert('Player 1 venceu!')
          window.location.reload()
        }
      }
      else {
        alert('Baixa MP');
        round();
      }
      break;

    case 'reverso':
      if (mp1>1){
        document.getElementById('reverso').play();
        mp1 = 0;
        hp2 = hp1;
        hp1 = hp2 - 1;
        document.getElementById('hp1').innerHTML = hp1;
        document.getElementById('hp2'.innerHTML) = hp2;
        if (hp2<1){
          death()
          alert('Player 1 venceu!')
          window.location.reload()
        }
        round();
      }
      else {
        alert('Baixa MP');
        round();
      }
      break;

    default:
      alert('Não reconhecida');
      round();
  }
}

function mago1(spell){
  switch (spell) {
    case 'incinerar':
      if (mp1>1){
        document.getElementById('incinerar').play();
        mp1 = 0;
        hp1 = hp1 - 2;
        hp2 = hp2 - 5;
        document.getElementById('hp1').innerHTML = hp1;
        document.getElementById('hp2').innerHTML = hp2;
        if (hp2<1){
          death()
          alert('Player 1 venceu!')
          window.location.reload()
        }
        round();
      }
      else {
        alert('Baixa MP');
        round();
      }
      break;

    case 'recover':
      if (mp1>0){
        document.getElementById('recover').play()
        mp1 = mp1 - 1;
        hp1 = hp1 + 3
        document.getElementById('hp1').innerHTML = hp1
        round();
      }
      else {
        alert('Baixa MP');
        round();
      }
      break;

    case 'calma':
      if (mp1<3){
        document.getElementById('calma').play()
        mp1 = mp1 + 1;
        round();
      }
      else {
        alert('Alta MP');
        round();
      }
      break;

    default:
      alert('Não reconhecida');
      round();
  }
}

function disparo1(spell){
  switch (class1) {
    case 'guerreiro':
      guerreiro1(spell);
      break;
    case 'mago':
      mago1(spell);
      break;
  }

}








function guerreiro2(spell){
  switch (spell) {
    case 'sessao':
      if (mp2>0) {
        document.getElementById('sessao').play()
        mp2 = mp2 - 1;
        hp1 = hp1 - y2;
        document.getElementById('hp1').innerHTML = hp1;
        if (hp1<1){
          death()
          alert('Player 2 venceu!')
          window.location.reload()
        }
      }
      else {
        alert('Baixa MP');
        round();
      }
      break;

    case 'reverso':
      if (mp2>1){
        document.getElementById('reverso').play()
        mp2 = 0;
        hp2 = hp1 - 1;
        hp1 = hp2;
        document.getElementById('hp1').innerHTML = hp1;
        document.getElementById('hp2'.innerHTML) = hp2;
        if (hp1<1){
          death()
          alert('Player 2 venceu!')
          window.location.reload()
        }
        round();
      }
      else {
        alert('Baixa MP');
        round();
      }
      break;

    default:
      alert('Não reconhecida');
      round();
  }
}

function mago2(spell){
  switch (spell) {
    case 'incinerar':
      if (mp2>1){
        document.getElementById('incinerar').play()
        mp2 = 0;
        hp2 = hp2 - 2;
        hp1 = hp1 - 5;
        document.getElementById('hp1').innerHTML = hp1;
        document.getElementById('hp2').innerHTML = hp2;
        if (hp1<1){
          death()
          alert('Player 2 venceu!')
          window.location.reload()
        }
        round();
      }
      else {
        alert('Baixa MP');
        round();
      }
      break;

    case 'recover':
      if (mp1>0){
        document.getElementById('recover').play()
        mp2 = mp2 - 1;
        hp2 = hp2 + 3
        document.getElementById('hp2').innerHTML = hp2
        round();
      }
      else {
        alert('Baixa MP');
        round();
      }
      break;

    case 'calma':
      if (mp2<3){
        document.getElementById('calma').play()
        mp2 = mp2 + 1;
        round();
      }
      else {
        alert('Alta MP');
        round();
      }
      break;

    default:
      alert('Não reconhecida');
      round();
  }
}

function disparo2(spell){
  switch (class2) {
    case 'guerreiro':
      guerreiro2(spell);
      break;
    case 'mago':
      mago2(spell);
      break;
  }

}
