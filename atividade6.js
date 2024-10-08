



const prompt = require('prompt-sync')();

const letra = (prompt('Informe uma Letra do A ao E:'));


switch(letra){
    case 'A':
        console.log('motos, motonetas, triciclos e ciclomotores.')
        break;
     case 'B':
       console.log('carros de passeio e veículos de carga leve.')
      break;
     case 'C':
        console.log('veículos de carga acima de 3,5 toneladas.')
        break;
     case 'D':
         console.log('veículos com mais de oito passageiros.')
            break;
     case 'E':
         console.log('veículos com unidade acoplada acima de 6 toneladas.')
                break;
}