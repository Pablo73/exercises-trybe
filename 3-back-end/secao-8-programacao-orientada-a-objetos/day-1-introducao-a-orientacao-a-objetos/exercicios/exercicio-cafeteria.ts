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
    get value(): number {
        return this._value;
    }

}

class Client {
    private _name: string;
    private _order: Array<Order>;
    private _typePayment: string;
    private _discount: number;
    private _amount: number;

    
    constructor (name: string, order: Array<Order>,
        typePayment: string, discount: number, amount: number) {
        this._name = name,
        this._order = order,
        this._typePayment = typePayment,
        this. _discount = discount,
        this._amount = amount
    }

    get value(): number {
        if (this._order && this._order.length > 0) {
         const some = this._order.reduce((acc, curr) => acc + curr._value);
         return some
        }
        return this._order[0]._value
    }
}

const order1 = new Order('Batata frita', 16.2);
const order2 = new Order('CocaCola' , 15.2);

console.log(typeof order1);


const clintePablo = new Client('Pablo', [order1, order2], 'dinheiro', 0.3)
console.log(clintePablo);