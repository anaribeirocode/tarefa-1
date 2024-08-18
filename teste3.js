function countOccurrences (fruits) {
    return fruits 
        .reduce((contagem, Quantidade) => {
      contagem[Quantidade] = (contagem[Quantidade] || 0) + 1;
      return contagem;
    }, {});   
}


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const result = countOccurrences(fruits);
console.log(result);
