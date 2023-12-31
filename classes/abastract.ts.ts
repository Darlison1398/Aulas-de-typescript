// no javascript não tem classes abstrato;
// no abstract, não precisamos dar o retorno da propriedade;
abstract class Internet {
    protected nome :string = '';
    protected valor: number = 0;

    constructor (nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }

    public velociade(vel: number){
        return `a velocidade da internet é de ${vel}`;
    }

    protected abstract tipo: string;
    public abstract qualVoceUsa(): string;
}

class Vivo extends Internet{
    protected tipo: string = 'Banda Larga';
    public qualVoceUsa(): string {
        return `você usa ${this.nome}`;
    }
    constructor() {
        super('Fibra ótica', 5);
    }
}

class Tim extends Internet{
    protected tipo: string = 'Banda Curta';

    public qualVoceUsa(): string {
        return `você usa ${this.nome}`;
    }

    constructor() {
        super('Rádio', 4);
    }
}

const vivo = new Vivo();
const tim = new Tim();

console.log(vivo);
console.log(tim);
console.log(tim.qualVoceUsa());
console.log(vivo.qualVoceUsa())
