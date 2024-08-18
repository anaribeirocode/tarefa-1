const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ];
  
  const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
  ];


  function mergeArrays(array1, array2) {
        const result = {};
    
        array1
          .forEach(item => {
            result[item.id] = item;
    });
    
        array2
          .forEach(item => {
            result[item.id] = { ...result[item.id], ...item };
    });
    
        return Object
          .values(result);
    }
    
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);

//tive um pouco de dificuldade na resolução desta tarefa.
