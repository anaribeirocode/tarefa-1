
const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }

  ];
const category = item.category;

function groupByCategory () {
    return items
        .reduce((result, item) => {
        if (!result[category]) {
            result[category] = []; 
   }
   result[category]
       .push(item);
return result; 
    },{});
    
}
const groupOfItems = groupByCategory(items);
console.log(groupOfItems);
