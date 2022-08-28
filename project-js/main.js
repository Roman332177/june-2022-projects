
function createUserBlock(user) {
        const div = document.createElement('div');
        div.classList.add('user-item');

        const userId = document.createElement('p');
        userId.classList.add('user-id');
        userId.innerText = user.id;
        div.appendChild(userId);

        const userName = document.createElement('p');
        userName.classList.add('user-name');
        userName.innerText = user.name;
        div.appendChild(userName);

        const userDetailsLink = document.createElement('a');
        userDetailsLink.setAttribute('href', `user-details.html#${user.id}`);
        userDetailsLink.innerText = 'View user details';
        div.appendChild(userDetailsLink);

        return div;
    }

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            const usersBlocks = document.createElement('div');
            usersBlocks.classList.add('users-wrapper');
            for(let i=0; i < users.length; i++) {
                const userBlock = createUserBlock(users[i]);
                usersBlocks.appendChild(userBlock);
            }
            document.body.appendChild(usersBlocks)
        });
}

getUsers();
