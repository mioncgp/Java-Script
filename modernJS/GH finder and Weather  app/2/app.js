// const data = new Weather('c0c9635e078bd384b5ca8642ca9d913c', `Samara`);\
let data;
const insertData = new UI();

// grab ui variables
const city = document.querySelector('#city');
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');

// Event listeners
btn.addEventListener('click', start);

function start(e) {
    const data = new Weather('', `${city.value}`);
    data.getWeather() 
    .then(info => {
    insertData.showInfo(info);
    city.value = '';
})
    e.preventDefault();
}
