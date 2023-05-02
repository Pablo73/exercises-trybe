export class Person {
    protected _name: string;
    protected _birthDate: string;

    constructor( name: string, birthDate: string) {
        if (name.length > 2) {
            this._name = name
        } else {
            throw new Error ('Name must be at least 3 characters');
        }
        if (new Date(birthDate).getTime() < (new Date).getTime() 
        && (new Date).getFullYear() - new Date(birthDate).getFullYear() < 120) {
            this._birthDate = birthDate
        } else {
            throw new Error ('Invalid date');
        } 
    }

get name() {
    return this._name;
}

get birthDate() {
    return this._birthDate
}


}