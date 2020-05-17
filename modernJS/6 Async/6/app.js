// callback functions
`A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.`
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
    setTimeout(function() {
        posts.push(post);
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

// 1 get posts 2 create new and append

createPost({title: 'Post three', body: 'this is post three'});
getPosts();


function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

// 1 create new append 2 get posts
createPost({title: 'Post three', body: 'this is post three'}, getPosts);
