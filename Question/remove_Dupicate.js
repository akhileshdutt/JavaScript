const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("Enter array: ",(input)=>{
    const arr = input.split(" ").map(Number);

    function removeDuplicate(arr){
        
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]===arr[i+1]){
                arr.splice(i+1, 1);
                i--;
            }
            
        }
        return arr.length;
    }
    console.log(removeDuplicate(arr));


    rl.close();
})