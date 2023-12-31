const fn = (nome: string, idade: number) => {

    // eu poderia usar um if else para verificar ou validar algum dado aqui
    return `Nome: ${nome}, idade: ${idade}`;
};

console.log(fn('Darlison Silva', 25));
//console.log(fn('Marcos Rocha')); // aqui vai dar um erro porque tá faltando a idade