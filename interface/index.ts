interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: number;
    enabled(): boolean;
}

let pessoa: IPessoa = {
    nome: 'Darlison Silva',
    idade: 25,
    cpf: 000000000,
    enabled: () => {
        return true;
    },
};

class Joao implements IPessoa {
    nome: string;
    idade: number;
    cpf: number;
    enabled(): boolean {
        throw new Error("Method not implemented.");
    }

}