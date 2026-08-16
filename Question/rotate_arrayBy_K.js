// rotate array by K


const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Emter Array: ", (input)=>{
    const arr = input.split(" ").map(Number);
    // let k = Number.Input();
    rl.question("Enter value of K: ", (Kinput)=>{
        let k = Number(Kinput);
        
        
        // this is not optimised. time complexity of below code is O(N); as splice and inshft complexity is O(N) + O(N) = O(N).

        // function rotate(arr, k){
        //     let size = arr.length;
            
        //     if(k>size){
        //         k=k%size;
        //     }
            
        //     const rotated = arr.splice(size-k, size);
        //     arr.unshift(...rotated);
            
        //     return arr;
        // }


        //optimised 

        


        console.log(rotate(arr,k));
        
        rl.close();
    })
})
