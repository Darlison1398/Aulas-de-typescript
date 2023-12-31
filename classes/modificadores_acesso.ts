/* PUBLIC -- pode ser acessado tanto pela mesma classe, classe filhas e outras classes;

PROTECTED -- pode ser acessado pela mesma classe e classes filhas, mas não pode ser
acessado por outras classes.

PRIVATE -- pode ser acessado somente pela própria classe.
*/

// no typescript, o anderline significa que a classe ou método é private
// também posso usar o # para dizer que ela é privada
class Carro {
    public nome: string = '';
    public ano: number = 0;
    private dono: string = '';
    // poderia ser assim também: _dono: string = '';
    _combustivel: string = '';

    // privada
    #km: number = 0;

    constructor(nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano;
    }

    public cor ( desc: string) {
        return `Esse carro é da cor ${desc}`;
    };

    public marca() {
        return `ele é da marca ${this.nome}`;
    }
}

const car1 = new Carro('BMW', 2022);

car1.