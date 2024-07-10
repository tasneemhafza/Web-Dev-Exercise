// Recursive approach
// function factorial(x) {
//     if (x == 0) {
//         return 1;
//     }
//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const a= prompt("Enter the number: ")
// if (a >= 0) {
//     const result = factorial(a);
//     alert(`The factorial of ${a} is ${result}`);
// }
// else {
//     console.log('Enter a positive number.');
// }


// using reduce
let a = 5

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))