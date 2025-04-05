//Igor Bruno Andrade De Barros
//25114290130

let anoInicial = 2024;
let anoFinal = 2500;
for ( let ano = anoInicial; ano <= anoFinal; ano++) {
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0 && ano % 100 == 0)) {
        console.log(` ${ano} é um ano bissexto .`);
    }
}
