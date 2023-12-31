// usado quando tivermos um retorno infinito ou retorna um erro
const  error = (): never => {
    throw new Error ('Algo deu errado');
};

/*const loop = (): never => {
    while (true) {
        console.log('Olá');
    }
};*/


// EU PODERIA usar o any também
const validate = (value: string | number) => {
    if (typeof value === 'string'){
        return 'É um erro';
    } else if (typeof value === 'number') {
        return 'É um number';
    }

    console.log(error());
};

validate(1);