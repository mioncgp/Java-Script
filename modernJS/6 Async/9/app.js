// Fetch method returns promises
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file
function getText() {
    fetch('text.txt')
    .then(function(res) {
        return res.text();
    })
    .then(function(data) {
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
        console.log(err);
    })
}

// Get Json form a local file
function getJson() {
    fetch('posts.json')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let posts = '';
        data.forEach(function(post) {
            posts += `
            <li>${post.title}</li>
            `
        });
        document.getElementById('output').innerHTML = posts;
    });
} 

// Get from an external API
function getExternal() {
    fetch('https://api.github.com/users')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let users = '';
        data.forEach(function(user) {
            users += `
            <li>${user.login}</li>
            `
        });
        document.getElementById('output').innerHTML = users;
    });
} 