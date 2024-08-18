
const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }

  ];

function groupByCategory () {
    return items
        .reduce((result, item) => {
        const category = item.category;
        if (!result[category]) {
            result[category] = []; 
   }
   result[category].push(item);
    return result; 
    },{});
    
}
const groupedItems = groupByCategory(items);
console.log(groupedItems);
