//Objeto
// let singer = {
//     name: 'Milton',
//     lastName: 'Nascimento',
//     nickName: 'Bituca',
//     age: 77,
//     bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas']
// };

// console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possue' + ' ' + singer.age + ' anos.');

// console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possue' + ' ' + singer['age'] + ' anos.');

// //Criando propriedade

//singer['fullName'] = singer.name + ' ' + singer.lastName;

// console.table(singer);

//Objeto dentro de outro objeto.

let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickName: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};
singer['fullName'] = singer.name + ' ' + singer.lastName;
console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);


