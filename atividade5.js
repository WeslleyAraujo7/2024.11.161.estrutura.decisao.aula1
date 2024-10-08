
const prompt = require('prompt-sync')();

console.log('Qual operação deseja fazer?\n - SOMA\n - SUBTRAÇÃO\n - MULTIPLICAÇÃO\n - DIVISÃO');

const operação = parseInt(prompt('Informe a opção escolhida: '));

const numero1 = parseFloat(prompt(`Informe o número 1: `));
const numero2 = parseFloat(prompt(`Informe o número 2: `));

let resultado = 0;


switch(operação){
    case 1:
        resultado = numero1 + numero2
        break;
    case 2:
        resultado = numero1 - numero2
        break;
    case 3:
        resultado = numero1 * numero2
        break;
    case 4:
        resultado = numero1 / numero2
        break; 

}

console.log(`Resultado é: ${resultado}`)