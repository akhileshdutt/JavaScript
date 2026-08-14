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
//


