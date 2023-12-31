// métodos estaticos não são chamados na instância da classe, ou seja, eles 
// não precisam ser instanciados para serem usados.

class Utils {
    static cloneObject(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

// como eu adicionei o static, eu não preciso instanciar o Utils
//const utils = new Utils();

const tenis1: { tamaho: number; estoque: boolean} = {
    tamaho: 41,
    estoque: true,
};

const tenis2: { tamaho: number; estoque: boolean} = {
    tamaho: 41,
    estoque: true,
};

Utils.cloneObject([tenis1,tenis2])

let a = Utils.cloneObject([tenis1,tenis2]);
console.log(a);

// eu poderia imprimir assim também
//console.log(utils.cloneObject([tenis1,tenis2]));