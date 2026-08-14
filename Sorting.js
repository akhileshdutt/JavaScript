// bubble sort : here we check each and every element of the array and compare

// const bubbleSort = (arr) => {
//     const n = arr.length
//     for(let i=0;i<n;i++){
//         for(let j=0; j<n-i-1; j++){                                  // N times
//             if(arr[j]>arr[j+1]){                                     // N times
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([10,8,24,1,44,34]));

// best time complexity = O(N) {when array is already sorted}
// worst time complexity = O(N^2)  {when array is totally reversed}
// avg time complexity = O((n/2)*n)= O(N^2).   {}
 
// space complexity = O(1)

//-------------------------------------------------------------------------------------
// Selection sort : here we pick the smallest number and put it at the first place

// const selectionSort = (arr) => {
//     const n= arr.length;

//     for(let i=0; i<n-1; i++){
//         let minIndex =i;
//         for(let j=i+1; j<n; j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j;
//             }
//         }
//         if(minIndex !== i){
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([10,8,24,1,44,34]))

// time complexity : O(N^2)
// space complexity : O(N^2)

//------------------------------------------------------------------------------
// Insertion sort : here we comapre just two elemnt at once, like 1st and 2nd element and comapre the then exhange the value, or jab tk smaller value ekdm aage nhi ho jati tab tk vo loop chalta rhega

// function insertionSort(arr){
//     const n= arr.length;

//     for(let i=1; i<n; i++){
//         let key = arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j]>key){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key; 
//     }
//     return arr;
// }
// console.log(insertionSort([10,8,24,1,44,34]));

//best time complexity = O(N)
// worst and avg time complexity : O(N^2)
//space complexity = O(1)                   

//----------------------------------------------------------------------------------------
// Sort() method in javaScript

// const fruit = ["Banana", "Cherry", "Apple", "Dragon fruit", "Ananas"];
// console.log(fruit.sort());        // alphabetically sort kr diya h, pehle first char liya, agr vo same hai to second char comapre kiya, seems good na, now come to numbers

// const num = [10, 23, 5, 14, 18];
// console.log(num.sort())         // now the output is [10, 14, 18, 23, 5], but how, here also it comapre the first element first then gose to 2nd.

// // to solve this issue, we add a comapre function, lets do it

// const compare = (a,b) =>{       // here a and b is the 2 element of array
//                                 // if a-b<0 => a comes first ;  if a-b==0 => nothing happens. ;  if a-b>0 => b comes first

//     return a-b;                 // if we want in decending ordr, we do =>  b-a
// };
// console.log(num.sort(compare));       // now the output is correct

// const people=[
//     {name:"rohan", age:28},
//     {name:"riya", age:26},
//     {name:"roya", age:3},
//     {name:"rihan", age:10}
// ]

// const compare1 = (a,b) =>{
//     return a.age - b.age;
// }
// console.log(people.sort(compare1));

//------------------------------------------------------------------------------------------
//Merge Sort: we divide the big array in 2 smaller one and sort them, and it gose until every elemn is alone, then we comapre each nd every element. 

function mergeSort(arr){
    //base case
    if(arr.length<=1)return arr;
    let mid = Math.floor(arr.length/2);     // floor makes the round off value

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));    // if we do not mention the range, it will go till end.
    // now this will spead each and every element.

    return merge(left, right);
}
function merge(left, right){
    let sortedArr =[];

    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift());   // remove element from left array and add it to shortedArr
        }else{
            sortedArr.push(right.shift());    // remove element from right array and add it to shortedArr
        }
    }
    return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([10,8,24,1,44,34]))

// time complexity : O(N logN)
// space complexity: O(n) 