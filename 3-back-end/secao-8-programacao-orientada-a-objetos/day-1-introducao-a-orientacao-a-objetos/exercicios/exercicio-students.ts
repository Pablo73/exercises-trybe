class Students {
     private _registration: string;
     private _name: string;
     private _testResults: number[];
     private _workNotes: number[];

     constructor(
        registration: string = '',
        name: string = '',
        testResults: number[] = [0, 0, 0, 0],
        workNotes: number[] = [0, 0],
     ) {
        this._registration = registration;
        this._name = name;
        this._testResults = testResults;
        this._workNotes = workNotes;
     }

     

     get sumOfStudentGrades(): number {
        const some = this._testResults.reduce((acc, curr) => acc + curr);
        return some;
     }

     get gradePointAverage(): number {
        return this.sumOfStudentGrades / this._testResults.length;
     }

}
const naida = new Students('mbt45484', 'Naida Navinda Navolta Pereira', [10, 10, 10, 10], [10, 10]);
console.log(naida);
console.log(naida.sumOfStudentGrades);
console.log(naida.gradePointAverage);