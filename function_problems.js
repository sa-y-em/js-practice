

// sum of an array with a function
function sum(inp) {
    let initialSum= 0;
    for(let i of inp){
      initialSum = i + initialSum;     
    }
    return initialSum;
}


let i = sum([50,5])
console.log(i)