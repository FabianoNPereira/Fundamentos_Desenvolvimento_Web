let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

// Exercicio 1:
for (let number of numbers) {
    console.log(number);
}

// Exercicio 2:
for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log('Exercicio 2, soma:', soma);

// Exercicio 3:
let media = soma / numbers.length;
console.log('Exercicio 3, Média Aritmética:', media);