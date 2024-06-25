
const grid = document.querySelector('.grid');
const headerJogo = document.querySelector('.jogador');
const tempo = document.querySelector('.tempo');
const pont = document.querySelector(".pont  ")
const reiniciar = document.querySelector(".reiniciar")
let pontuacao = 0;

const personagens = [
  '1',
  '2',
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",


];

const createElement = (tag, classe) => {
  const elemento = document.createElement(tag);
  elemento.className = classe;
  return elemento;
}

let primeiroCard = '';
let segundoCard = '';

const checarCards = () => {
  const primeiroPersonagem = primeiroCard.getAttribute('data-personagem');
  const segundoPersonagem = segundoCard.getAttribute('data-personagem');

  if (primeiroPersonagem === segundoPersonagem) {

    primeiroCard.firstChild.classList.add('desativarCard');
    segundoCard.firstChild.classList.add('desativarCard');

    primeiroCard = '';
    segundoCard = '';

    pont.innerHTML = `${pontuacao+=50}`

    



  } else {
    setTimeout(() => {

      primeiroCard.classList.remove('revelarCard');
      segundoCard.classList.remove('revelarCard');

      primeiroCard = '';
      segundoCard = '';


    }, 500);
  }

}

const revelarCard = ({ target }) => {

  if (target.parentNode.className.includes('revelarCard')) {
    return;
  }

  if (primeiroCard === '') {

    target.parentNode.classList.add('revelarCard');
    primeiroCard = target.parentNode;

  } else if (segundoCard === '') {

    target.parentNode.classList.add('revelarCard');
    segundoCard = target.parentNode;

    checarCards();

  }
}

const createCard = (personagem) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('./imagens/${personagem}.jpeg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revelarCard);
  card.setAttribute('data-personagem', personagem)

  return card;
}

const carregarJogo = () => {
  const personagensDuplicados = [...personagens, ...personagens];

  const personagensEmbaralhados = personagensDuplicados.sort(() => Math.random() - 0.5);

  personagensEmbaralhados.forEach((personagem) => {
    const card = createCard(personagem);
    grid.appendChild(card);
  });
}

const começarTempo = () => {

  this.loop = setInterval(() => {
    const tempoCorrido = +tempo.innerHTML;
    tempo.innerHTML = tempoCorrido + 1;
  }, 1000);

}

window.onload = () => {
  headerJogo.innerHTML = localStorage.getItem('jogador');
  começarTempo();
  carregarJogo();
}

reiniciar.addEventListener("click",()=>{
  pontuacao = ""
  pont.innerHTML = ""
  tempo.innerHTML = ""})