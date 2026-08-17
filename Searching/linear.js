const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
 
//input we'll take is [12,23,34,45,56,24,13,23];
//target will be 56

rl.question("Enter array: ", input=>{
    const arr = input.split(" ").map(Number);

    linerS(arr, 23);
    console.log(globalSearch(arr, 23));

    rl.close();
})

function linerS(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            console.log(i);
        }
    }
    return -1; 
}

function globalSearch(arr, target){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            result.push(i);
        }
    }
    if(result.length == 0) return -1;

    return result;
}