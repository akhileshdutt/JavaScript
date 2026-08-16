//print second largest number

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//print second largest number


rl.question("Enter array: ", (input)=>{

    const arr = input.split(" ").map(Number);

    // const compare = (a,b) =>{
    //     return a-b;
    // }

    // arr.sort(compare);
    
    // let n = arr.length;
    // let Smax = 0;

    // for(let i=n-1; i>0; i--){
    //     if(arr[i]==arr[i-1]){
    //         i--;
    //     }else{
    //         Smax = arr[i-1];
    //         break;
    //     }
    // }

    // console.log(arr);
    // console.log(Smax);

    //another way.                                 ####################################
    
    // let n = arr.length;
    // let max = arr[0];
    // let smax=arr[1];

    // if(smax>max){
    //     [max, smax] = [smax, max];
    // }

    // for(let i=2; i<n ;i++){
    //     if(arr[i]>max){
    //         smax = max;
    //         max = arr[i];
    //     }
    //     else if(arr[i]> smax && arr[i] !== max){
    //         smax = arr[i];
    //     }
    // }
    
    // one more simple way                ##########################################################

    // we'll use set here, that will first take all the unique elements and then sort it.

//     function allUnique(arr){
//         const uniqueArr = Array.from(new Set(arr));

//         uniqueArr.sort((a, b) =>{
//             return b-a;
//         })
//         if(arr.length>=2){
//             return uniqueArr[1];
//         }else{
//             return -1;
//         }

//         return[...uniqueArr];
//     }

//    console.log(allUnique(arr));


   // this above code time complexity is O(nlogn). we need something better;

   //                                          #################################################


   let max = Number.NEGATIVE_INFINITY;
   let smax = Number.NEGATIVE_INFINITY;

   for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            smax = max;
            max = arr[i];
        }
        else if(arr[i]!= max && arr[i]>smax){
            smax = arr[i];
        }
   }
   return smax;
    rl.close();
});
