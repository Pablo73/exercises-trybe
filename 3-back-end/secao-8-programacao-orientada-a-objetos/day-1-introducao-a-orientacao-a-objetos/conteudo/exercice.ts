//exemplo
// class Person {
//     name: string;
//     height: number;
//     weight: number;
  
//     constructor(n: string, h: number, w: number) {
//       console.log(`Creating person ${n}`);
//       this.name = n;
//       this.height = h;
//       this.weight = w;
//     }
  
//     sleep() {
//       console.log(`${this.name}: zzzzzzz`);
//     }
//   }
  
//   const p1 = new Person('Maria', 171, 58);
//   const p2 = new Person('João', 175, 66);
//   console.log(p1.name, p1.height, p1.weight);
//   console.log(p2.name, p2.height, p2.weight);
//   p1.sleep();
//   p2.sleep();
  
  /*
  Saída:
  Creating person Maria
  Creating person João
  Maria 171 58
  João 175 66
  Maria: zzzzzzz
  João: zzzzzzz
  */



// exercice 1
class Tv {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;

    constructor(brand: string, size: number, resolution: string, connections: Array<string>) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }

    tvOn() {
        console.log(`A Tv marca: ${this._brand} , modelo: ${this._size} está ligada`);
    }

    get connectedTo(): string | undefined {
        return this._connectedTo;
    }

    set connectedTo(value: string | undefined) {
        if (!value) {
            console.log('Sorry, connection unavailable!')
        } else {
            this._connectedTo = value;
        }

    }

    const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'USB', 'Wi-Fi']);
    tv1.tvOn();
    tv1.connectedTo = 'Wi-Fi';
    console.log('Connected to: ', tv1.connectedTo);

}

// exercice 2

//  Pense em três métodos que você utilizou com alguma frequência ao longo do curso mesmo sem 
//  entender como eles funcionavam “nos bastidores”. Cronometre ⏲️ cinco minutos para pensar e siga adiante!

// fetch, console.log, connection.execute

// exmplo 
class Person {
    name: string;
    private _weight: number;
    private _age: number;
    readonly height: number;
  
    constructor(name: string, height: number, weight: number, age: number) {
      this.name = name;
      this._weight = weight;
      this._age = age;
      this.height = height;
    }
  
  // esta sintaxe permite acessar o valor retornado via person.getWeight()
    getWeight() {
      return this._weight;
    }
  
  // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
    get age() {
      return this._age;
    }
  
  // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
  // mesmo que esteja ocorrendo uma validação internamente
    set age(newValue: number) {
      if (newValue >= 0 && newValue < 200) {
        this._age = newValue;
      }
    }
  
    birthday() {
      this._age += 1;
    }
  
  }
  
  const p1 = new Person('Maria', 171, 58, 19);
  const p2 = new Person('João', 175, 66, 18);

  // Alteração direta de variável pública
p1.name = 'Mariah';
// Acesso direto a variável pública
console.log(p1.name);
// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log(p2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age);
// Leitura de atributo readonly
console.log(p1.height);

/*
Saída:
Mariah
58
18
19
17
171
*/

p2.age = 300;
console.log(p2.age);
// Saída: 17

//Agora um exemplo de sintaxes que são inválidas neste contexto:

// Acesso externo à classe a atributo privado
// p1._weight;
// p1._weight = 1;
// // Acesso a atributo inexistente
// p1.weight;
// p1.weight = 1;
// // Escrita em atributo readonly
// p1.height = 1;

