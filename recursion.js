// function multiply(arr){
//     let product=1;

//     for (let i = 0; i < arr.length; i++) {
//         product *= arr[i];
        
//     }
//     return product;
// }

// console.log(multiply([1,2,3,4]));

// // now we'll solve this using recursion;

// function recMultiply(arr){
//     if(arr.length<=0){
//         return 1;
//     }else{
//         return arr[arr.length-1] * multiply(arr.slice(0, arr.length-1))
//     }
// }
// console.log(recMultiply([1,2,3,4]));

// Factorial-------------------------------------------------------------

function factorial(n){

    if(n==1){
        return 1;
    }
    return n* factorial(n-1);
}

// console.log(factorial(5));

//Palindrome--------------------------------------------------------

// return true if palindrome, and false if not

// palindrome: a number which is exactly same when you read it forward or backward.

function palindrome(n){
    let temp=n;
    const arr =[];
    while(n>=1){
        arr.push(n%10);
        n=Math.floor(n/10);
    }
    n = Number(arr.join(""));
    console.log(n);

    // console.log(arr);
    if(n == temp){
        return true;
    }else{
        return false;
    }
}
// console.log(palindrome(10));

//Fibonacci----------------------------------------------------------------------
// fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

// var fib = function (n){
//     const arr=[0, 1];

//     for(let i=2; i<=n; i++){
//         arr.push(arr[i-1] + arr[i-2]);
//     }
//     return arr[n];
// }
// console.log(fib(5));


// the above was common method, now we'll use recursion

function fibonacci(n){
    if(n<=1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
// console.log(fibonacci(7));

// agar ham dhyaan se dekhe to uper wale logic me ham neeche se uper aate hain,
// jaise ham vaha pehle ek array banate hain fir usme add karte rehte hain.
// lekin yaha pe ham pehle main value (n) check karte hain ki kya vo 1 ke barabar
// aai ya usse choti yani 0 aai ki nahi. Agar aisa nahi hai to ham n-1 aur n-2 karte hain,
// aur recursively function ko call karte hain. Ye process tab tak chalta hai jab tak
// ham base condition tak nahi pahunch jaate. Jaise hi n 1 ya 0 hota hai, function
// value return karta hai. Uske baad recursion neeche se uper aana start karta hai aur
// har previous function call ko uski value milti hai. Isi returned value ka use karke
// ham n-1 aur n-2 ko add karte hain aur final answer nikalte hain.
// Matlab recursion me pehle calls neeche jaati hain aur base case tak pahunchti hain,
// phir values return hote hue neeche se uper aati hain aur final result banta hai.

// subsets (backtracking algo using recursion)

// input: [1,2,3].   # output: [[],[1],[2],[3],[1,2],[2,3],[1,3],[1,2,3]]

    
function subset(arr){
    let result = [];
    let temp =[];

    function recursiveSS(arr,i){
        if(i==arr.length){
            return result.push([...temp]);
        }

        temp.push(arr[i]);
        recursiveSS(arr, i+1);
        temp.pop();
        recursiveSS(arr, i+1);
    }
    recursiveSS(arr,0);
    return result;
}
console.log(subset([1,2,3]));