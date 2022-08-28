function getPostIdFromUrl() {
        const postId = window.location.hash.slice(1);
        console.log('postId', postId);
        return postId;
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


function createPostDetailsBlock(post) {
    const div = document.createElement('div');
    div.classList.add('post-details-wrapper');

    createPElementForEveryProperyInObject(post, div);

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

function getPostDetailsById() {
    const postId = getPostIdFromUrl()
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((post) => {
            console.log('post', post)
            const postBlock = createPostDetailsBlock(post);
            document.body.appendChild(postBlock)
        })
        .then(() => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        })
        .then((response) => response.json())
        .then((comments) => {
            console.log('post commnets', comments)
            const commentsBlocks = document.createElement('div');
            commentsBlocks.classList.add('post-comments-wrapper');
            for(let i=0; i < comments.length; i++) {
                const commentBlock = document.createElement('p');
                commentBlock.classList.add('comment-wrapper')
                commentBlock.innerText = comments[i].body;
                commentsBlocks.appendChild(commentBlock);
            }
            document.body.appendChild(commentsBlocks);
        })
}

getPostDetailsById();