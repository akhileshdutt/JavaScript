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
console.log(fibonacci(7));

// agar ham dhyaan se dekhe the uper wale logic me ham neeche se uper aate h, jaise ham vaha pehle ek array bnate h fir usme add krte rehte h
// lakin yaha pe ham pehle main value (n) check krte h ki ky vo 1 ke barabar aai ya usse chote yani 0 aai ki nhi, agr aisa nhi h to ham n-1 and n-2 krte h, 



