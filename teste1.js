const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true },
   ];

function transformData (users) {
    return users
        .filter(function(user) {
            return user.isActive === true;
        })
        .map (function(user) {
        return {
            id: user.id,
            name: user.name
        };
        })
        .sort(function(a,b){
        return a.name.localeCompare(b.name);
    });
}

const result = transformData(users);
console.log(result);