function countOccurrences (fruits) {
    return fruits  //eu retornei frutas
      //tb adicionei o reduce como um acumulador
        .reduce((contagem, Quantidade) => {
      contagem[Quantidade] = (contagem[Quantidade] || 0) + 1;
      return contagem;
      //retornei para apresentar a nova contagem
    }, {});   
}


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const result = countOccurrences(fruits);
console.log(result);
