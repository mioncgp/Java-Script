// if you put the word  "async" before a function it is going to return a promise
async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data"), 3000);
    });

    const err = false;
    if(!err) {
        const res = await promise; // wait till the promise is resolved
        return res;
    } else {
        await Promise.reject(new Error('Something is wrong'));
    }
}

async function getUsers() {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once its resolved
    const data = await response.json();

    // Continue next only if the second promise is resolved
    return data; 
}

getUsers().then(users => console.log(users));