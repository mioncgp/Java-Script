// Iterators are sort of like advanvced loops that can be paused. Name next is usually used.
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ?
            { value: names[nextIndex++], done: false } :
            { done: true }
        }
    }
}

const namesArr = ['Mike', 'Sergei'];

const names = nameIterator(namesArr);


// Generators are functions that can be paused and return multiple values /yeild values
function* sayNames() {
    yield 'Mike';
    yield 'Sergei';
    yield 'Nick';
}


// Id creator
function* createIds() {
    let index = 0;

    while(true) {
        yield index++;
    }
}

// generator
const person = {
    name: 'Rick',
    username: "RickSanchez",
    age: 70,
    iq: 160
}

// makeing an object iterable via genertor
let count = 0;
let Obj = {
    [Symbol.iterator]: function(obj) {
        return {
            next: () => {
                count++;
                switch(count) {
                    case 1:
                        return {
                            value: obj.name,
                            done: false
                        }
                    case 2:
                        return {
                            value: obj.username,
                            done: false
                        }
                    case 3:
                        return {
                            value: obj.age,
                            done: false
                        }
                    case 4:
                        return {
                            value: obj.iq,
                            done: false
                        }
                    default:
                        return {
                            value: undefined,
                            done: true
                        }
                }
            }
        }
    }
}

const personIter = Obj[Symbol.iterator](person);
console.log(personIter.next())
console.log(personIter.next())
console.log(personIter.next())
console.log(personIter.next())
console.log(personIter.next())