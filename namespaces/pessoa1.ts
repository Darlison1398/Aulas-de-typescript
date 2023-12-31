//com o namespace, podemos usar essa variável novamente, mesmo que ela já tenha sido
// declarada antes. Eles são bons para resolvermos os conflitos com as variáveis globais


namespace p1 {
    export let nome = 'Darlison';
};

console.log(p1.nome);
