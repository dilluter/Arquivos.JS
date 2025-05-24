// Importa o módulo prompt-sync para capturar entrada no terminal
const prompt = require('prompt-sync')({ sigint: true });

// Simulando um banco de dados com usuários e senhas
const usuarios = [
    { usuario: "admin", senha: "1234" },
    { usuario: "editor", senha: "5678" },
    { usuario: "visitante", senha: "0000" },
    { usuario: "igor", senha: "2502" }, // Adicionando usuário Igor
    { usuario: "gabi", senha: "2512" } // Adicionando outro usuário
];

// Captura os dados do usuário pelo terminal
let usuarioDigitado = prompt("Digite seu usuário: ");
let senhaDigitada = prompt("Digite sua senha: ");

// Verifica se o usuário existe no "banco de dados"
let usuarioEncontrado = usuarios.find(u => u.usuario === usuarioDigitado && u.senha === senhaDigitada);

if (usuarioEncontrado) {
    console.log(`✅ Bem-vindo, ${usuarioEncontrado.usuario}!`);
} else {
    console.log("❌ Acesso negado! Usuário ou senha incorretos.");
}

