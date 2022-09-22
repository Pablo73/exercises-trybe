// As Higher Order Functions ou HOFs são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las. 

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

// --------------------------------------------------------------

// Estruturando uma HOF

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);

// -----------------------------------------------------------------

  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });

  // -------------------------------------------------------

  const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// ------------------------------------------------------------------

const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());

  // -----------------------------------------------------------------

  const startDay = () => 'Acordando!!';

  const breakfast = () => 'Bora tomar café!!';

  const goodEvening = () => 'Partiu dormir!!';

  const situationDay = (fun) => fun();

  console.log(situationDay(breakfast));

