const NOME = "Yuri Gabriel";
let tituloProfissional = "Garoto de Programa / Faço de tudo";
let minhaBio = "Sou um cara esforçado. Agora sou Baterista" +
    " Antes eu não era nada";
let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

const DATAATUAL = new Date(); // Data atual, data completa, biblioteca de data do JavaScript
let mesAtual = DATAATUAL.getMonth() + 1; // Mês atual (0-11, por isso +1)
let anoAtual = DATAATUAL.getFullYear(); // Ano atual
let diaAtual = DATAATUAL.getDate(); // Dia atual

let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
};

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;

const DATA_FORMATURA = new Date(anoFormatura, mesFormatura - 1, diaFormatura);
const AGORA = new Date();
let mensagemTempoRestante;

if (AGORA > DATA_FORMATURA) {
  mensagemTempoRestante = "Já me formei!";
} else {
  mensagemTempoRestante = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos, ${mesFormatura - mesAtual} meses e ${diaFormatura - diaAtual} dias`;
}

document.getElementById("tempoRestanteParaFormatura").innerText = mensagemTempoRestante;

// Botão modo claro/escuro
const botaoModo = document.getElementById('modoEscuroClaro');

botaoModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Atualizar texto do botão
    if (document.body.classList.contains('dark-mode')) {
        botaoModo.textContent = 'Modo Claro';
        localStorage.setItem('modo', 'escuro');
    } else {
        botaoModo.textContent = 'Modo Escuro';
        localStorage.setItem('modo', 'claro');
    }
});

// Carregar modo salvo
window.addEventListener('load', () => {
    const modoSalvo = localStorage.getItem('modo');
    if (modoSalvo === 'escuro') {
        document.body.classList.add('dark-mode');
        botaoModo.textContent = 'Modo Claro';
    } else {
        botaoModo.textContent = 'Modo Escuro';
    }
});


let projetos = [

    //objeto de index 0 do arrey de objetos
    {nome: "aplicaçoes de estacionamento",
    tecnologias: "HTML, CSS, JavaScript",
    conhecimentos: "Desenvolvimento de uma aplicação de estacionamento utilizando HTML, CSS e JavaScript. O projeto inclui funcionalidades como cadastro de veículos, controle de entrada e saída, cálculo de tempo e valor a ser pago, além de uma interface amigável para os usuários.",
    descricao: "Desenvolvimento de uma aplicação de estacionamento utilizando HTML, CSS e JavaScript. O projeto inclui funcionalidades como cadastro de veículos, controle de entrada e saída, cálculo de tempo e valor a ser pago, além de uma interface amigável para os usuários."
    },

    {nome: "aplicaçoes de calculadora",
    tecnologias: "HTML, CSS, JavaScript",
    conhecimentos: "Desenvolvimento de uma aplicação de calculadora utilizando HTML, CSS e JavaScript. O projeto inclui funcionalidades como operações matemáticas básicas (adição, subtração, multiplicação e divisão), interface intuitiva e responsiva para os usuários.",
    descricao: "Desenvolvimento de uma aplicação de calculadora utilizando HTML, CSS e JavaScript. O projeto inclui funcionalidades como operações matemáticas básicas (adição, subtração, multiplicação e divisão), interface intuitiva e responsiva para os usuários."
    },  
]

const conteiner = document.getElementById('conteinerProjetos');
if (conteiner) {
    conteiner.innerHTML += "<h2>" + projetos[0].nome + "</h2>";
    conteiner.innerHTML += "<h2>" + projetos[1].nome + "</h2>";
    conteiner.innerHTML += "<h2>" + projetos[0].descricao + "</h2>";
} else {
    console.error('Elemento com id "conteinerProjetos" não encontrado.');
}