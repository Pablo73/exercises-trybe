class Order {
    private _nameOrder: string;
    private _value: number;

    constructor (
        nameOrder: string,
        value: number,
    ) {
        this._nameOrder = nameOrder,
        this._value = value
    }
    get values(): number {
        return this._value;
    }

}

class Client {
    private _name: string;
    private _order: Array<Order>;
    private _typePayment: string;
    private _discount: number;

    
    constructor (name: string, order: Array<Order>,
        typePayment: string, discount: number) {
        this._name = name,
        this._order = order,
        this._typePayment = typePayment,
        this. _discount = discount
    }

    public value(): number {
        if (this._order.length > 0 && this._typePayment === 'cartão') {
         const some = this._order.reduce((acc, curr) => {return acc + curr.values}, 0)
         return some
        }
        if (this._order.length > 0 && this._typePayment === 'dinheiro') {
            const some = this._order.reduce((acc, curr) => {
                const some = acc + curr.values;
                const discount = some * this._discount
                return some - discount;
            }, 0)
            return some
           }
        throw new Error ('não existe order');
    }
}

class Data {
    private _dia: string;
    private _mes: string;
    private _ano: string;
    
    constructor(dia: string, mes: string, ano: string) {
            this._dia = dia;
            this._mes = mes;
            this._ano = ano;
     
    }

    get dataValidad() {
        const validDate = /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:0?[1-9]|1[0-2])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        ;
        if (validDate.test(`${this._dia}/${this._mes}/${this._ano}`)) {
            return `${this._ano}/${this._mes}/${this._dia}`
        } else {
            return '01/01/1900';
        }
    }

    get getMonthName() {
        const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        const monthName = meses[+this._mes - 1];
        if (monthName) {
            return monthName;
        }
        throw new Error ('mês invalido');
    }

    get isLeapYear() {
     const isBissexto = +this._ano % 4 === 0
     return isBissexto;
    }

    get compare(): string {
        const data = new Date();
        console.log(new Date().toString())
        const dia  = data.getDate().toString().padStart(2, '0');
        const mes  = (data.getMonth()+1).toString().padStart(2, '0');
        const ano  = data.getFullYear();
        const dataTypeDate = new Date(`${ano}/${mes}/${dia}`)
        const value = new Date(this.dataValidad)
   
        if (dataTypeDate.getTime() === value.getTime()) {
            return '0'
        }
        if (dataTypeDate.getTime() > value.getTime() 
        || dataTypeDate.getTime() < value.getTime()) {
            return '1'
        }
        return this.dataValidad;
    }


}

const order1 = new Order('Batata frita', 16.2);
const order2 = new Order('CocaCola' , 15.2);


const clintePablo = new Client('Pablo', [order1, order2], 'dinheiro', 0.1 )
// console.log(clintePablo.value());

const date = new Data('29', '04', '2023');
console.log(date.compare);
console.log(date.dataValidad);
// console.log(date.getMonthName);
// console.log(date.isLeapYear);
