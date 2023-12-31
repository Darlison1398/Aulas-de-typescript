class Pess {
    public nome: string = '';
    public idade: number = 0;

    constructor(nome: string, idade: number) {
        this.idade = idade;
        this.nome = nome;
    }

    public andar() {
        return `${this.nome} anda rápido`;
    }
}

class Vivi extends Pess {
    private _profissao: string = '';

    constructor() {
        super('Viviane Araújo', 35);
    }

    get profissao() {
        // aqui no get podemos fazer validações. Podemos usar funções,  if else, etc.
        return this._profissao;
    }

    set profissao(valor: string) {
        this._profissao = valor;
    }
}

const vivi = new Vivi();
console.log(vivi.andar());
console.log(vivi);
console.log(vivi.idade);
vivi.profissao = 'Atriz';
console.log(vivi.profissao);
