async function fetchUserData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
  
        const filteredUsers = users
            .filter(user => user.username.startsWith('C'));
        return filteredUsers;
}
fetchUserData()
    .then(filteredUsers => {
        console.log('Users filtrados:', filteredUsers);
    });
