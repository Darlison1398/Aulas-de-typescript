// enum não é um tipo, mas sim um algutinador de dados;
var Mes;
(function (Mes) {
    Mes["JAN"] = "Janeiro";
    Mes["FEV"] = "Fevereiro";
    Mes["MAR"] = "Mar\u00E7o";
})(Mes || (Mes = {}));
console.log(Mes);
console.log(Mes.JAN);
var pessoa = {
    nome: 'Darlison Silva',
    mesAniversario: Mes.FEV
};
if (pessoa.mesAniversario = Mes.FEV) {
    console.log(pessoa);
}
