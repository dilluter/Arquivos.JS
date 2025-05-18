const prompt = require("prompt-sync")({sigint:true});
let premio1 = 22
let premio2 = 45
let premio3 = 90

for(let i = 1; i <= 3; i++){
    let num =parseInt(prompt("digite sua tentativa:0 "));
if(num == premio1 || num == premio2 || num == premio3){
    console.log("voce acertou")
    break;
}

else{
    console.log("voce errou ")
}
}

