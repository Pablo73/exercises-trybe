// //Objeto
// // let singer = {
// //     name: 'Milton',
// //     lastName: 'Nascimento',
// //     nickName: 'Bituca',
// //     age: 77,
// //     bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas']
// // };

// // console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possue' + ' ' + singer.age + ' anos.');

// // console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possue' + ' ' + singer['age'] + ' anos.');

// // //Criando propriedade

// //singer['fullName'] = singer.name + ' ' + singer.lastName;

// // console.table(singer);

// //Objeto dentro de outro objeto.

// // let singer = {
// //     name: 'Milton',
// //     lastName: 'Nascimento',
// //     nickName: 'Bituca',
// //     age: 77,
// //     bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
// //     bornInfo: {
// //         city: 'Rio de Janeiro',
// //         state: 'Rio de Janeiro'
// //     }
// // };
// // singer['fullName'] = singer.name + ' ' + singer.lastName;
// // console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);


// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };

//   console.log(car.type);
//   console.log(car['type']);

//   let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4


//   let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };
  
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com
  
//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey


  // Exercicio 1 - Crie um objeto player contendo as variáveis listadas abaixo.

//   let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2, 
//         silver: 3
//     }
// };

//Exercicio 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir 
//no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

//console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' ' + 'anos de idade');

//Exercicio 3 - 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as 
//datas em que a jogadora Marta foi considerada a melhor do mundo.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2, 
        silver: 3
    }
    // bestInTheWorld: {
    //    array: [2006, 2007, 2008, 2009, 2010, 2018]
    // }
};

//Exercicio 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato:
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

//console.log('A jogadora Marta Silva foi eleita a melhor do mundo por ' + player.bestInTheWorld.array.length - 1 + ' vezes');


//Exrcicio 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
//Agora veremos uma variação do laço for, que nos garante facilidade ao lidar com objetos.

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')