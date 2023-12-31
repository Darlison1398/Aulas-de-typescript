// para cada elemento desse array, temos que defini o tipo de dado deleç.
let arr: [ string, string, number, boolean ] = [ 'Darlisin Silva', 'Teste', 123, true ];


let arr2 : Array<string | number | boolean> = [true, 'Carla', 123, 'Cristina'];

console.log(arr);
console.log(arr2);

let objt1: {nome: string, sobrenome: string, msg: boolean} = {
     nome: 'Jozelia',
     sobrenome: 'Silva',
     msg: false,
}

console.log(objt1);



let objt2: Array <{nome: string,
                   sobrenome: string, 
                   msg: boolean
                }> = [    
                        {
                            nome: 'Jozelia',
                            sobrenome: 'Silva',
                            msg: false,
                        }

                    ];


console.log(objt2);
