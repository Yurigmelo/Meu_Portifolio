const NOME = "Yuri Gabriel";
let tituloProfissional = "Desenvolvedor de Software";
let minhaBio = "Sou um cara esforçado, e ganho bastante dinheiro"
let anoFormatura = 2026;
let anoIngresso = 2025;
let indefinido;
let nulo = null;
let curso = {
    nome:"Analise e Desenvolvimento de Sistemas",
    semeste: 3,
    disciplinaAtual: "Desing focado em ususario"
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
document.getElementById("anoFormatura").innerText = anoFormatura;
document.getElementById("anoIngresso").innerText = anoIngresso;
document.getElementById("curso").innerText = curso.nome;