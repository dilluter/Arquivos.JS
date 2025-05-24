let anoInicial = 1896;
let anoFinal = 2025;
for (let ano = anoInicial; ano <= anoFinal; ano++) {
    if (ano % 4 == 0 && ano != 1916 && ano != 1940 && ano != 1944) {
        console.log(`no ano ${ano} ocorreram jogos das olímpiadas.`);
    }
}
