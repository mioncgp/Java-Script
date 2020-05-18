const http = new EasyHTTP();

const cData = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@gmail.com',
}

http.get('https://jsonplaceholder.typicode.com/posts')
.then(data => console.log(data))
.catch(err => console.log(err));

http.post('https://jsonplaceholder.typicode.com/users', cData)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/2', cData)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));