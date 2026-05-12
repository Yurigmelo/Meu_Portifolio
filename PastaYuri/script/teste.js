
let fruta = [/*0*/"maçä",/*1*/ "banana", /*2*/ "laranja", /*3*/ "uva"]; //indices comecam no 0.

console.log(fruta. length); // Quantidade de itens no array

fruta.push("abacaxi"); // Adiciona um item no final do array

fruta.unshift("morango");// Adiciona um item no início do array

fruta.shift(); // Remove o primeiro item do array

fruta.pop(); // Remove o último item do array

console.log(fruta.indexOf("abacaxi")); // Retorna o indice do item, ou -1 se não

fruta.splice(2, 1); //Remove 1 item a partir do indice 2
fruta.splice(3,0,"melancia","maça verde","kiwi"); // Adiciona itens a partir do indice 3, sem remover nenhum item

console.log(fruta);



fruta.forEach(function(item) {
    console.log(item);
}); // Itera sobre cada item do array e executa a função para cada um


//----------------------------------------------------------------------------------------------------

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

let indefinido;
let nulo = null;

console.log(typeof nulo); 
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);    
console.log(typeof curso);

