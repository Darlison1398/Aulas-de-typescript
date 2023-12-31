type alphanumeric = string | number;

let dados: alphanumeric;
let dados2: alphanumeric;

dados = 1;
dados = 'Olá';
dados = true; // nesse caso ele vai dar erro porque não foi definido o tipo boolean pra ele

dados2 = 2;
dados2 = 'EI';
dados2 = false; // também vai dar o mesmo erro que o de cima;