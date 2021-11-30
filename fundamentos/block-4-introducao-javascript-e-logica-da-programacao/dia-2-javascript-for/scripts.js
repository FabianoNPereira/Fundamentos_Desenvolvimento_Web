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

// Exercicio 4:
if (media > 20) {
    console.log("valor maior que 20.");
} else {
    console.log("valor menor ou igual a 20");
}

// Exercicio 5:
for (let number of numbers) {
    numbers.sort((a, b) => a - b);
}
console.log('Maior valor dentro do array: ',numbers[numbers.length -1]);

// Exercicio 6:
let impar = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        impar.push(numbers[i]);
    }
}
if (impar.length > 0) {
        console.log('Números impares:', impar);
    } else {
        console.log('nenhum valor ímpar encontrado!');
    }

    // Exercicio 7:
    for (let number of numbers) {
        numbers.sort((a, b) => a - b);
    }
    console.log('Menor valor dentro do array:', numbers[0]);