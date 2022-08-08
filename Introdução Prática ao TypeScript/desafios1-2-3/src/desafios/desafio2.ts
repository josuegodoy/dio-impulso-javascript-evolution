//para apresentação do resultado no html
const result2 = document.getElementById("result2");
/*
Desafio:
// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

//Primeiro vou criar enums e tipos para ajudar
//Um enum de trabalho pois as minhas opções são fixas
enum Trabalho {
  Atriz,
  Padeiro,
  Desenvolvedora
}

//Vou usar um type para ser obrigada a fornecer os dados
type Humano = {
  nome: string;
  idade: number;
  profissao: Trabalho;
};

let pessoa1: Humano = {
  nome: "Maria",
  idade: 29,
  profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
  nome: "Roberto",
  idade: 19,
  profissao: Trabalho.Padeiro
};
let pessoa3: Humano = {
  nome: "Laura",
  idade: 32,
  profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
  nome: "Carlos",
  idade: 19,
  profissao: Trabalho.Padeiro
};

let pessoa5: Humano = {
  nome: "Josué",
  idade: 44,
  profissao: Trabalho.Desenvolvedora
};
let todos: Humano[] = [];
todos.push(pessoa1);
todos.push(pessoa2);
todos.push(pessoa3);
todos.push(pessoa4);
todos.push(pessoa5);

let htmlFinal: string = "";

todos.forEach((pessoa) => {
  htmlFinal += `
  Nome: ${pessoa.nome}<br>
  Idade: ${pessoa.idade}<br>
  Profissão: ${pessoa.profissao}<hr>`;
});
console.log(htmlFinal);
if (result2) result2.innerHTML = htmlFinal;
