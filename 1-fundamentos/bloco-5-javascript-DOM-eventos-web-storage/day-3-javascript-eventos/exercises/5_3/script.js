function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();


//   Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
 
  function createDaysOfTheMonth() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dayContainer = document.querySelector('.days-container').firstElementChild;

    for(let index = 0; index < decemberDaysList.length; index += 1) {
        const dayList = document.createElement('li');
        const days = decemberDaysList[index];
        dayList.innerHTML = days;
        
        dayList.className = 'day';

        if (decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31) {
            dayList.className += ' holiday';
        }
        if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25) {
            dayList.className += ' friday';
        }
       dayContainer.appendChild(dayList);

    };
    
};

  createDaysOfTheMonth();


//   Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function creatButton() {

   const buttonsContainer = document.querySelector('.buttons-container');
   const buttonFeriado = document.createElement('button');
   buttonFeriado.innerHTML = 'Feriado';
   buttonFeriado.id = 'btn-holiday';

   buttonsContainer.appendChild(buttonFeriado);

}
creatButton()

// Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

const sexta = document.querySelectorAll('.holiday');
const button = document.getElementById('btn-holiday');

button.addEventListener('click', function () {

  for (let index = 0; index < sexta.length; index += 1) {
  
  if (sexta[index].style.backgroundColor === "green"){
    sexta[index].style.backgroundColor = "white";
  }else {sexta[index].style.backgroundColor = "green"; }
  }
});

// Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function createButtonFriday() {
  const buttonsContainer = document.querySelector('.buttons-container');
  const buttonFriday = document.createElement('button');
  buttonFriday.innerHTML = "Sexta-feira";
  buttonFriday.id = "btn-friday";

  buttonsContainer.appendChild(buttonFriday);
}
createButtonFriday()

// Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

const fridayDay = document.querySelectorAll('.friday');
const buttonFriday = document.getElementById('btn-friday');


buttonFriday.addEventListener('click', function () {

  for (let index = 0; index < fridayDay.length; index += 1) {

  if (fridayDay[index].innerHTML === '4'){
    friday[index].innerHTML = "Fim de semana!!!";

  }//else {friday[index].style.backgroundColor = "number"; }
 }
});

