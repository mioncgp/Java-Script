const http = new easyHTTP;

const data = {
    title: '2',
    body: 'some data'
}

http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
    if(err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});


http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, posts) {
    if(err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, posts) {
    if(err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});

http.delete('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log('4')
        console.log(response);
    }
});



