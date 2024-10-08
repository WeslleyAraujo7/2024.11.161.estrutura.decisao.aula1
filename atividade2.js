

const numero = '6'

switch(numero) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
        console.log('Reprovado')
        break;
    case '5':
    case '6':
        console.log('Recuperação')
        break;

    case '7':
    case '8':
    case '9':
    case '10':
        console.log('Aprovado')
        break;
}