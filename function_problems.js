

// sum of an array with a function
//-----------------------------------------------
// function sum(inp) {
//     let initialSum= 0;
//     for(let i of inp){
//       initialSum = i + initialSum;     
//     }
//     return initialSum;
// }


// let i = sum([50,5])
// console.log(i)

//return even numbers only from a function
//----------------------------------------------
// function even(inputA) {
//     let finalEven = []
//     let finalOdd = []
//     for (let i of inputA) {
//         if (i % 2 === 0) {
//             finalEven.push(i)


//         }
//         else {
//             finalOdd.push(i)
//         }
//     }
//     return { finalEven, finalOdd }
// }

// let a = even([2, 5, 65, 41, 23, 201, 222, 8520, 136])
// console.log(a)
// let b = even([4,10 , 1, 664, 8, 54, 555, 7, 121, 0, 5545, 10, 41])
// console.log(b)
//----------------------------------------------------------------------------
//sum of only even numbers

function even(inputA) {
    
    let sum = 0;
    for (let i of inputA) {
        if (i % 2 === 0) {
            // finalEven.push(i)
            sum = sum + i


        }
        
    }
    return sum;
}

let a = even([2, 5, 65, 41, 23, 201, 222, 85201, 13])
console.log(a)
let b = even([4, 10, 1, 664, 8, 54, 555, 7, 121, 0, 5545, 10, 41])
console.log(b)