# Explicação do Código do Portfólio

Este arquivo explica **palavra por palavra** o que cada parte do código faz no meu portfólio. Usei variáveis e comentários em português brasileiro (PT-BR) para ficar mais fácil de entender. O código é simples e "humano", sem complicações desnecessárias.

## Estrutura dos Arquivos

- **index.html**: A página principal do site.
- **style.css**: Os estilos (cores, layouts) da página.
- **script.js**: O código JavaScript que faz as coisas funcionarem.

## Explicação do script.js

Aqui vai linha por linha o que o script faz. Imagine que você está lendo o código como uma história.

```javascript
// Definindo constantes e variáveis principais
const NOME = "Yuri Gabriel";  // Meu nome completo, guardado em uma constante porque não muda
let tituloProfissional = "Garoto de Programa / Faço de tudo";  // Meu título profissional, pode mudar no futuro
let minhaBio = "Sou um cara esforçado. Agora sou Baterista" +  // Minha biografia, dividida em linhas para ficar legível
    " Antes eu não era nada";
let anoFormatura = 2026;  // Ano que vou me formar
let mesFormatura = 12;  // Mês da formatura
let diaFormatura = 31;  // Dia da formatura
let anoIngresso = 2025;  // Ano que entrei na faculdade
let mesIngresso = 1;  // Mês de ingresso
let diaIngresso = 1;  // Dia de ingresso

// Pegando a data atual do sistema
const DATAATUAL = new Date();  // Cria um objeto de data com a data de hoje
let mesAtual = DATAATUAL.getMonth() + 1;  // Pega o mês atual (getMonth dá 0-11, então +1 para 1-12)
let anoAtual = DATAATUAL.getFullYear();  // Pega o ano atual
let diaAtual = DATAATUAL.getDate();  // Pega o dia atual

// Variáveis especiais para testar tipos
let indefinido;  // Uma variável sem valor, fica "undefined"
let nulo = null;  // Uma variável com valor nulo

// Objeto com informações do meu curso
let curso = {
    nome: "Sistemas de Informação",  // Nome do curso
    semestre: 3,  // Semestre atual
    disciplinaAtual: "Design focado no usuário"  // Disciplina que estou cursando agora
};

// Testando tipos das variáveis no console (para desenvolvedores verem)
console.log(typeof nulo);  // Mostra "object" (null é um tipo especial)
console.log(typeof indefinido);  // Mostra "undefined"
console.log(typeof anoFormatura);  // Mostra "number"
console.log(typeof minhaBio);  // Mostra "string"
console.log(typeof tituloProfissional);  // Mostra "string"
console.log(typeof NOME);  // Mostra "string"
console.log(typeof curso);  // Mostra "object"

// Colocando as informações na página HTML
document.getElementById("meuNome").innerText = NOME;  // Coloca meu nome no elemento com id "meuNome"
document.getElementById("tituloProfissional").innerText = tituloProfissional;  // Coloca o título no elemento certo
document.getElementById("minhaBio").innerText = minhaBio;  // Coloca a bio no elemento certo
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;  // Coloca o ano com um texto

// Calculando o tempo restante para formatura
const DATA_FORMATURA = new Date(anoFormatura, mesFormatura - 1, diaFormatura);  // Cria data da formatura (mês -1 porque Date usa 0-11)
const AGORA = new Date();  // Data de agora
let mensagemTempoRestante;  // Variável para guardar a mensagem

// Verifica se já passou da data de formatura
if (AGORA > DATA_FORMATURA) {
  mensagemTempoRestante = "Já me formei!";  // Se sim, mensagem positiva
} else {
  // Se não, calcula anos, meses e dias restantes
  mensagemTempoRestante = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos, ${mesFormatura - mesAtual} meses e ${diaFormatura - diaAtual} dias`;
}

// Coloca a mensagem na página
document.getElementById("tempoRestanteParaFormatura").innerText = mensagemTempoRestante;

// Agora, a parte do botão de modo claro/escuro
const botaoModo = document.getElementById('modoEscuroClaro');  // Pega o botão pelo id

// Quando clica no botão, faz isso:
botaoModo.addEventListener('click', () => {
    document.body.classList.toggle('modo-claro');  // Alterna a classe "modo-claro" no body (liga/desliga)
    
    // Atualiza o texto do botão dependendo do modo
    if (document.body.classList.contains('modo-claro')) {
        botaoModo.textContent = 'Modo Escuro';  // Se está claro, botão diz "Modo Escuro"
        localStorage.setItem('modo', 'claro');  // Salva no navegador que está claro
    } else {
        botaoModo.textContent = 'Modo Claro';  // Se está escuro, botão diz "Modo Claro"
        localStorage.setItem('modo', 'escuro');  // Salva no navegador que está escuro
    }
});

// Quando a página carrega, verifica se havia um modo salvo
window.addEventListener('load', () => {
    const modoSalvo = localStorage.getItem('modo');  // Pega o modo salvo
    if (modoSalvo === 'claro') {
        document.body.classList.add('modo-claro');  // Aplica modo claro se salvo
        botaoModo.textContent = 'Modo Escuro';  // Ajusta texto do botão
    } else {
        botaoModo.textContent = 'Modo Claro';  // Senão, deixa como está
    }
});
```

## Explicação do style.css

O CSS controla as aparências. Usei variáveis para facilitar mudanças.

```css
:root {
    --bg-color: aquamarine;  /* Cor de fundo padrão (escuro) */
    --text-color: black;  /* Cor do texto */
    --header-bg: #333;  /* Fundo do cabeçalho */
    --header-text: white;  /* Texto do cabeçalho */
    --nav-link: white;  /* Cor dos links no menu */
}

* {
    margin: 0;  /* Sem margens */
    padding: 0;  /* Sem preenchimentos */
    box-sizing: border-box;  /* Caixas incluem bordas e preenchimentos */
}

body {
    background-color: var(--bg-color);  /* Fundo do corpo usa variável */
    color: var(--text-color);  /* Texto do corpo usa variável */
    transition: background-color 0.3s, color 0.3s;  /* Transições suaves para mudanças */
}

header {
    background-color: var(--header-bg);  /* Fundo do cabeçalho */
    color: var(--header-text);  /* Texto do cabeçalho */
    padding: 10px 0;  /* Preenchimento vertical */
    transition: background-color 0.3s, color 0.3s;  /* Transições */
}

nav ul {
    list-style-type: none;  /* Sem bolinhas na lista */
    margin: 0;  /* Sem margens */
    padding: 0;  /* Sem preenchimentos */
    display: flex;  /* Itens lado a lado */
    justify-content: center;  /* Centralizados */
}

nav ul li {
    margin: 0 15px;  /* Espaço entre itens */
}

nav ul li a {
    color: var(--nav-link);  /* Cor dos links */
    text-decoration: none;  /* Sem sublinhado */
    transition: color 0.3s;  /* Transição na cor */
}

/* Quando está no modo claro, muda as variáveis */
body.modo-claro {
    --bg-color: white;  /* Fundo branco */
    --text-color: black;  /* Texto preto */
    --header-bg: lightgray;  /* Cabeçalho cinza claro */
    --header-text: black;  /* Texto preto */
    --nav-link: black;  /* Links pretos */
}
```

## Explicação do index.html

O HTML é a estrutura da página.

- `<html lang="pt-BR">`: Página em português brasileiro.
- `<head>`: Cabeçalho com título, meta tags e link para CSS.
- `<body>`: Corpo com cabeçalho (nav), main (conteúdo) e script.
- Elementos com ids: onde o JS coloca o texto.
- Botão com id "modoEscuroClaro": para alternar modos.

## Como Tudo Funciona Junto

1. **Página carrega**: JS pega dados e coloca no HTML. CSS aplica estilos.
2. **Botão clicado**: JS alterna classe no body, CSS muda cores automaticamente.
3. **Salva preferência**: No navegador, lembra se era claro ou escuro.
4. **Próxima visita**: Carrega o modo salvo.
