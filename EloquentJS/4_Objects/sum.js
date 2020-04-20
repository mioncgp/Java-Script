// Sums all the numbers between two numbers
function sum(start, end) {
    let total = 0;
    
    for(let i = 0; i <= end; i++) {
        total = total + start;
        start = start + 1;
    }
    return total;
}

// Sums numbers from an array
function sumArray(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total;
}

// Retrun an array between two number with an optional step
function arrayCreate(start, end, step) {
    let array = [];
        if(step) {
            if(step > 0) {
                for(let i = start; i <= end; i = i + step) {
                    array.push(i);
                }
            } else {
                for(let i = start; i <= end; i = i - step) {
                    array.unshift(i);
                }
            }
            
        } else {
            for(let i = start; i <= end; i++) {
                array.push(start);
                start+=1;
            }
        }
    return array;
}

// Reversing an array
let arr = [1, 2, 3, 4];

function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

// Reverse array in place
function reverseArrayPlace(array) {
     let front = 0;
     let back = array.length -1;
     while (front < back) {
         swap(array, front, back)
         front++;
         back--;
     }
     return array;
}

function swap(array, front, back) {
    let temp = array[front];
    array[front] = array[back];
    array[back] = temp;
}

// A list
function arrayToList(array) {
    let list = null;
    for(let i = array.length -1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

let list = {
    value: 1,
    rest: { 
        value: 2,
        rest: { 
            value: 3, 
            rest: null 
        } 
    } 
};



function listToArray(list) {
    let array = [];
    for (let node = list; node !== null; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }