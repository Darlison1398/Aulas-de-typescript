class Great {
    public readonly nome: string = 'Darlison Silva';
}

let p = new Great();

console.log(p.nome);
//p.nome = 'Marcos Rocha';
// console.log(p.nome);

// o uso do readonly nos impede de modificar o dado. Isso é bastante eficiente
// em vários casos.