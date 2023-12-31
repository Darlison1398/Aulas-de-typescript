// enum não é um tipo, mas sim um algutinador de dados;
// usamos o seguinte comando no terminal para compilar o código para javascript: npx tsc nome_do_arquivo.ts
enum Mes {
    JAN = 'Janeiro',
    FEV = 'Fevereiro',
    MAR = 'Março',
}

console.log(Mes);
console.log(Mes.JAN);

const pessoa: {nome: string, mesAniversario: string} = { 
    nome: 'Darlison Silva',
    mesAniversario: Mes.FEV
};

if (pessoa.mesAniversario = Mes.FEV) { 
    console.log(pessoa);
}