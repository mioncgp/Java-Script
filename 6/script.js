const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
)).then(Array => {
    console.log('1', array[0])
})