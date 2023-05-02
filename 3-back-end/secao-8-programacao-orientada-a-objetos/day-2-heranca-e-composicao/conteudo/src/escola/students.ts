import { Person } from "./person";

export class Students extends Person {
    private _enrollment: String;
    private _examsGrades: number[] = [];
    private _assignmentsGrades: number[] = [];

    constructor(
        name: string,
        birthDate: string,
        ) {
            super(name, birthDate);
            this._enrollment = this.generateEnrollment();
    }

    

    get sumOfStudentGrades(): number {
       const some = this._examsGrades.reduce((acc, curr) => acc + curr);
       return some;
    }

    get gradePointAverage(): number {
       return this.sumOfStudentGrades / this._examsGrades.length;
    }

    set examsGrades(newValue: number[]) {
        if (newValue.length > 4) {
            throw new Error ('Maximum of 4 notes');
        }
        this._examsGrades = newValue
    }

    set assignmentsGrades(newValue: number[]) {
        if (newValue.length > 2) {
            throw new Error ('Maximum of 2 notes');
        }
        this._assignmentsGrades = newValue
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
        return `STU${randomStr}`;
      }


}