// class Animal {
//     /*
//       Ao invés de declarar os atributos antes do construtor, receber parâmetros
//       no construtor e colocá-los nos atributos da classe, se não formos
//       validar, podemos utilizar uma forma simplificada de escrita, simplesmente
//       colocando o modificador de visibilidade na frente
//       do nome do parâmetro no construtor
  
//       Exemplo
//       O seguinte código:
  
//       public x: number
//       constructor(x: number) { this.x = x }
  
//       Pode ser substituído por:
  
//       constructor(public x: number) { }
      
//       Obs: Usando essa sintaxe é necessário indicar explicitamente 
//       logo antes do nome do atributo se ele é public, private, protected ou readonly
//     */
//     constructor(public name: string, private birthDate: Date) { }
  
//     get age() {
//       /*Para operar com datas, vamos operar somente com milissegundos. Uma data
//       é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
//       const timeDiff = Math.abs(
//         Date.now() -
//         new Date(this.birthDate).getTime()
//       );
  
//       /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
//       Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
//       return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//     }
//   }
  
//   class Mammal extends Animal {
//     walk() {
//       console.log(`${this.name} está andando!`);
//     }
//   }
  
//   const tiger = new Mammal(
//     'Tigre',
//     new Date(Date.parse('May 03, 2020')),
//   );
  
//   const main = (animal: Animal) => {
//     console.log(animal.age);
//   }
  
//   main(tiger);
//   tiger.walk();
  
//   /*
//   Saída (código rodado em Mar/2022):
//   1
//   Tigre está andando!
//   */

//   class Bird extends Animal {
//     fly() {
//       console.log(`${this.name} está voando!`);
//     }
//   }
  
//   const parrot = new Bird(
//     'Papagaio',
//     new Date(Date.parse('Jun 07, 2017')),
//   );
  
//   console.log(parrot.age);
//   parrot.fly();
  
//   /*
//   Saída (código executado em Mar/2022):
//   4
//   Papagaio está voando!
//   */

// class Superclass {
//     isSuper: boolean;

//     constructor(isSuper: boolean) {
//         this.isSuper = true;
//     }

//     public sayHello(): void {
//         console.log('Olá mundo!');
//     }
// }

// class Subclass extends Superclass {
//     // constructor(isSuper: boolean, sayHello: string) {
//     //     super(isSuper, sayHello )
//     // }
// }

// const myFunc = (object: Superclass) => {
//     object.sayHello();
// }

// const sup = new Superclass(true);
// const sub = new Subclass(false);

// myFunc(sup);
// myFunc(sub);



// class Animal {
//     constructor(protected birthDate: Date) { } // Protected: classe filha pode ler e escrever, mas acessos externos não
//   }
// class Bird extends Animal {
//     showBirthDate() {
//         console.log(this.birthDate); // Okay!
//     }
// }

class Superclass {
    isSuper: boolean;
  
    constructor() {
      this.isSuper = true;
    }
  
    // Mude a visibilidade do método `sayHello` de _public_ para _protected_.
    protected sayHello(): void {
      console.log('Olá mundo!');
    }
  }
  
  class Subclass extends Superclass {
    // Crie, na _Subclass_, um método público chamado `sayHello2`.
    public sayHello2(): void {
      // Chame o método `sayHello` dentro do método `sayHello2`.
      this.sayHello();
    }
  }
  
  // Faça a função receber não mais um objeto da _Superclass_, mas sim da _Subclass_.
  const myFunc = (object: Subclass) => {
    // Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método `sayHello2`.
    object.sayHello2();
  };
  
  // Comente a criação da instância da Superclass
  // const sup = new Superclass();
  const sub = new Subclass();
  
  // Comente a chamada da função que possui o objeto do tipo Superclass como parâmetro.
  // myFunc(sup);
  myFunc(sub);
  
  // Mude a visibilidade do método `sayHello` de _protected_ para _private_. O que acontece?
  // Ao mudar a visibilidade de _protected_ para _private_, o método `sayHello2` da _Subclass_ deixa de poder acessar o método `sayHello` definido na _Superclass_. Isso acontece pois um método privado só pode ser acessado na classe que o define.

