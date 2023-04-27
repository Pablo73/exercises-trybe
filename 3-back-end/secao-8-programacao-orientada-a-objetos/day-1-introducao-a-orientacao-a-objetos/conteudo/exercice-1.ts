class Tv {
    marca: string;
    modelo: string;
    tamahno: string;
    internet: boolean;

    constructor(ma: string, mo: string, t: string, i: boolean) {
        console.log(`Creando Tv {ma}`);
        this.marca = ma;
        this.modelo = mo;
        this.tamahno = t;
        this.internet = i;
    }

    ligada() {
        console.log(`A Tv ${this.marca} - ${this.modelo} : LIGADO `)
    }

}