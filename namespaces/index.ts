// namespaces são objetos javascript nomeados no namespaces global
namespace People {
    export namespace Maria {
        const data = 1 + 1;

        export let nome = 'Maria';
        export const calc = () => { 
            return data;
        };
    }

    export namespace Joao {
        const data = 1 + 1;

        export let nome = 'João';
        export const calc = () => { 
            return data;
        };
    }
}

console.log(People.Maria);
console.log(People.Joao);
