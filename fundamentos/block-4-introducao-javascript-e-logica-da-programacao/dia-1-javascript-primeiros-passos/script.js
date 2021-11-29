// exercicio 1:

const a = 5;
const b = 10
const c = 15;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

// exercicio 2:

if (a > b) {
    console.log(a);
} else if (a < b){
    console.log(b);
} else {
    console.log("igual");
}

// exercicio 3:

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
} else {
    console.log("Igual");
}

//  exercicio 4:

if (a <= 0) {
    console.log("negative");
} else {
    console.log("positive");
}

//  exercicio 5:

if (a + b + c === 180) {
    console.log("true");
} else {
    console.log("false");
}

// exercicio 6:

let pecaXadrez = "tc";
let pçMM = pecaXadrez.toLowerCase();

switch(pçMM) {
    case "peao":
        console.log("1 casa à Frente, em seu primeiro movimento pode mover 2 casas à frente, elimina outro oponente à sua diagonal à frente.");
        break;
    case "torre":
        console.log("Move-se para frente, trás ou lados, quantas casas quiser.")
        break;
    case "cavalo":
        console.log("Move-se em 'L', usando 3 casas.");
        break;
    case "bispo":
        console.log("Move-se na diagonal, quantas casas quiser.");
        break;
    case "rainha":
        console.log("Move-se para qualquer direção, quantas casas quiser.");
        break;
    case "rei":
        console.log("Move-se para qualquer direção, apenas 1 casa.");
        break;
    default:
        console.log("Essa peça não existe, pelo menos não no idioma português.");
        break;
}

// exercicio 7

let nota = "49%";
let apenasNumeros = nota.replace(/\D/gim, '');  // https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript //

 if (apenasNumeros >= 90) {
     console.log("Nota A!");
 } else if (apenasNumeros >= 80) {
     console.log("Nota B!");
 } else if (apenasNumeros >= 70) {
    console.log("Nota C!");
 } else if (apenasNumeros >= 60) {
    console.log("Nota D!");
 } else if (apenasNumeros >= 50) {
     console.log("Nota E!");
 } else {
     console.log("Nota F!");
 }

//  Exercicio 8

if (a %2 === 0 || b %2 === 0 || c %2 === 0) {
    console.log("true");
} else {
    console.log("false");
}

// Exercicio 9 igual o 8 erro.

// Exercicio 10

const custo = -1;
const vv = 25;
const imposto = 20;
const custoImposto = (custo * imposto) / 100 + custo;

let qtdVendida = 1000

let lucro = ((vv - custoImposto) * qtdVendida);

if (custo >= 0 && vv >= 0) {
console.log("R$",lucro);
} else {
    console.log("Erro!!! O programa será encerado!");
}

// Exercicio 11

const salBruto = 5400.82;
let salBase = null;
let salLiquido = null;

// Aliquotas INSS
const inss8 = 0.08;
const inss9 = 0.09;
const inss11 = 0.11;
const inssMax = 570.88;

// Aliquotas IR
const ir75 = 0.075;
const ir15 = 0.15;
const ir225 = 0.225;
const ir275 = 0.275;

// calculo INSS
if (salBruto <= 1556.94) {
    salBase = salBruto - (inss8 * salBruto);
} else if (salBruto <= 2594.92) {
    salBase = salBruto - (inss9 * salBruto);
} else if (salBruto <= 5198.82) {
    salBase = salBruto - (inss11 * salBruto);
} else {
    salBase = salBruto - inssMax;
}
console.log("Salário base R$",salBase);

// calculo do IR
if (salBase <= 1903.98) {
    salLiquido = salBase;
} else if (salBase <= 2826.65) {
    salLiquido = salBase - ((salBase * ir75) - 142.80);
} else if (salBase <= 3751.05) {
    salLiquido = salBase - ((salBase * ir15) - 354.80);
} else if (salBase <= 4664.68) {
    salLiquido = salBase - ((salBase * ir225) - 636.13);
} else {
    salLiquido = salBase - ((salBase * ir275) - 869.36);
} 
console.log("Salário líquido R$",salLiquido);