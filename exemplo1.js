const prompt= require('prompt-sync');

const idade = parseInt(prompt('Informe a sua idade'));

const ehMaiorDeIdade = idade >= 18;
const naoEhMaiorDeIdade = !ehMaiorDeIdade;

if (naoEhMaiorDeIdade) {    
    console.log(`é menor de idade`);

} else {
    console.log(`é maior de idade`);


}
// OPERADORES RELACIONAIS :

//MAIOR QUE ( > )
//MENOR QUE ( < )
//MAIOR OU IGUAL A ( >= )
//MENOR OU IGUAL A ( <= )
//IGUAL A ( == )
//DIFERENTE DE ( != )
