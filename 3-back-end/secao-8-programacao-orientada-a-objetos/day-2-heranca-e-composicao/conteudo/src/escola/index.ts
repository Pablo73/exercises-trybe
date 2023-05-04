import { Employee } from "./interface.employee";
import { Person } from "./person";
import { Students } from "./students";

const aluno1 = new Students('Graccile Nario', '1904/09/08');
const aluno2 = new Students('Mateo N. Dominguez', '2006/10/14');

// console.log(aluno1.name, aluno1.birthDate);
// console.log(aluno2.name, aluno2.birthDate);

aluno1.examsGrades = [25, 20, 25, 23];
aluno2.examsGrades = [25, 20, 25, 23];
aluno1.assignmentsGrades = [50, 45];
aluno2.assignmentsGrades = [47, 42];

console.log(aluno1)
console.log(aluno2)

// const testInterfaceEmployee: Employee = {
//     registration: 'FNC1234567891011',
//     salary: 1200.00,
//     admissionDate: new Date(),
  
//     generateRegistration(): string {
//       const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
  
//       return `FNC${randomStr}`;
//     },
//   };
  
  // console.log(testInterfaceEmployee);
  