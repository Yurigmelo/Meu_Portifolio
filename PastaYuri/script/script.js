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

let indefinido;
let nulo = null;

let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
};

console.log(typeof nulo); 
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);    
console.log(typeof curso);

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


