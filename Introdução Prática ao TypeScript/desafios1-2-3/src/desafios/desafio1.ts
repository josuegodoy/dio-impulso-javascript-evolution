/*
Desafio:
Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";

*/
//para apresentação do resultado no html
const result1 = document.getElementById("result1");
//Começo criando um interface

interface Employed {
  code: number;
  name: string;
}
//Depois inicializo meu objeto implementando a interface
let employee = {} as Employed;
employee.code = 10;
employee.name = "John";

if (result1)
  result1.innerHTML = `
Employee.code = ${employee.code} e Employee.name = ${employee.name}
`;
