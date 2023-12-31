// sempre que for uma classe, deve começar com "class"

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Darlison', 25);
const pessoa2 = new Pessoa('Jozelia', 44);

console.log(pessoa1);
console.log(pessoa1.idade);

console.log(pessoa2);
