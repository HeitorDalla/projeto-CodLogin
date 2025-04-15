"use strict";

let dadosLista = []; // Array para armazenar as pessoas cadastradas

// Função para o acesso a tela de cadastro
function acessar () {
    const loginEmail = document.querySelector("#loginEmail").value;
    const loginSenha = document.querySelector("#loginSenha").value;

    console.log(loginEmail)

    // Implementação de estrutura que vai testar se todos os campos estão preenchidos
    if (loginEmail && loginSenha) {
        window.location.href = 'cadastro.html'; // Redirecionamento para o arquivo de cadastro.html
    } else {
        alert("Favor preencher todos os campos."); // Alerta de aviso ao usuario
    }
};

// Função para salvar os usuarios cadastrados
function salvarUser () {
    const nomeUser = document.querySelector("#nomeUser").value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        nomeUser.value = ''; // Zera o texto do input
    }
};

// Evento para acontecer quando o html for completamento carregado
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    // Funcionalidades no button de entrar
    const buttonEntrar = document.querySelector("#buttonEntrar");
    buttonEntrar.addEventListener("click", (event) => {
        event.preventDefault();
    
        acessar();
    });
    
    // Funcionalidades no button de salvar
    const salvarUser = document.querySelector("#salvarUser");
    salvarUser.addEventListener("click", (event) => {
        event.preventDefault();

        salvarUser();
    });

});
