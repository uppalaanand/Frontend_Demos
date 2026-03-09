// a function can stores as a variable
//A function can send as arg to another function 
//A function can return anothet function

function count() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
}

let x = count();
console.log(x());
console.log(x());
console.log(x());



function sum() {
    let a = 10;
    return function() {
        let b = 20;
        return a+b;
    }
}

let inner = sum();
console.log(inner());

function getSum(b, ...a) {     //rest parameter
    return a.reduce((acc, val) => acc=acc+val);
}

console.log(getSum(10,10));
console.log(getSum(10,10,30,40));
console.log(getSum(10,10,3,4,3,3,3,3,3,3));