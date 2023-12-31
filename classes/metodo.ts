// os métodos estão dentro da classe. eles são semelhantes a funções

class People {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // método
    comer(comida: string) {
        return `o ${this.nome} comeu ${comida}`;
    }

    aniversario() {
        return `o ${this.nome} fez ${this.idade + 2} anos`;
    }
}

const p1 = new People('Darlison Silva', 23);
console.log(p1.comer('pizza de 4 queijos'));
console.log(p1.aniversario());

console.log('\n');

const p2 = new People('Jozelia Silva', 41);
console.log(p1.comer('Feijoada'));
console.log(p1.aniversario());