"use strict";

// Configuração acesso para a tela de login

function acessar () {
    const loginEmail = document.querySelector("#loginEmail").value;
    const loginSenha = document.querySelector("#loginSenha").value;

    console.log(loginEmail)

    // Implementação de estrutura que vai testar se todos os campos estão preenchidos
    if (!loginEmail || !loginSenha) {
        window.location.href = 'cadastro.html'; // Redirecionamento para o arquivo de cadastro.html
    } else {
        alert("Favor preencher todos os campos."); // Alerta de aviso ao usuario
    }
};

const buttonEntrar = document.querySelector("#buttonEntrar");
buttonEntrar.addEventListener("click", (event) => {
    event.preventDefault();

    acessar();
});