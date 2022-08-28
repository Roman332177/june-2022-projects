
function getUserIdFromUrl() {
    const userId = window.location.hash.slice(1);
    console.log('userId', userId);
    return userId;
}


function createPElementForEveryProperyInObject(object, div) {
    for (const key in object) {
        if(typeof object[key]  === 'object') {
            createPElementForEveryProperyInObject(object[key], div);
        } else {
            const pElement = document.createElement('p');
            pElement.innerText = `${key.toLocaleUpperCase()}: ${object[key]}`;
            div.appendChild(pElement);
        }
    }
}


function createUserDetailsBlock(user) {
    const div = document.createElement('div');
    div.classList.add('user-details-wrapper');

    createPElementForEveryProperyInObject(user, div);

    return div;
}

function createPostBlock(post) {
    const div = document.createElement('div');
    div.classList.add('post-wrapper');

    const postTitle = document.createElement('p');
    postTitle.innerText = post.title;
    div.appendChild(postTitle);

    const postDetailsLink = document.createElement('a');
    postDetailsLink.setAttribute('href', `post-details.html#${post.id}`);
    postDetailsLink.innerText = 'View post details';
    div.appendChild(postDetailsLink);

    return div;
}

function getUserPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response) => response.json())
        .then((posts) => {
            const postsBlocks = document.createElement('div');
            postsBlocks.classList.add('posts-wrapper');
            for(let i=0; i < posts.length; i++) {
                const postBlock = createPostBlock(posts[i]);
                postsBlocks.appendChild(postBlock);
            }
            document.body.appendChild(postsBlocks);
        })
}

function getUserDetailsById() {
    const userId = getUserIdFromUrl()
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((user) => {
            const userBlock = createUserDetailsBlock(user);
            document.body.appendChild(userBlock)

            const getPostsButton = document.createElement('button');
            getPostsButton.setAttribute('id', 'get-posts-button');
            getPostsButton.innerText = 'Post of current user';

            document.body.appendChild(getPostsButton);

        })
        .then(() => {
            const getPostsButton = document.getElementById('get-posts-button');
            getPostsButton.addEventListener('click', () => {
                console.log('CLICK by getPostsButton');
                getUserPosts(userId);
            });
        });
}

getUserDetailsById();