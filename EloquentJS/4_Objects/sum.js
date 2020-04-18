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

console.log(arrayCreate(1, 10));