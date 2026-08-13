const myArr = [0,1,2,3,"Rohan", true];     // this 1, 2, rohan, true, these all are elements of array
const myhero = ["spiderman", "Ironman"];   // we write in const so that we can not change the or new array with same name.

// //there is one more way to declare new array

// const myArr2= new Array(1,2,3,4);    // this is also correct

// // console.log(myArr[2]);
// // console.log(myArr[1]);

// // Array Methods

// // 1 -> push
// myArr.push(7); 
// // console.log(myArr);

// // 2-> pop. (removes last element, no need to give any other instruction)

// myArr.pop();
// // console.log(myArr);

// // 3-> unshift (add element in the beginning) ; and to remove the first element we use shift

// myArr.unshift(20);
// // console.log(myArr);
// myArr.shift();
// // console.log(myArr);

// // 4-> includes (it check that element is present in array or not)
// //.    indexOf (tell the position of array)

// console.log(myArr.includes(3));        // gives answer in true or false
// console.log(myArr.indexOf(2));         // if any element is not present in aray, it prints -1

// // if we want to change the array in string

// const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);          // this prints the elements in String.

// we can check the type 
// console.log(typeof(newArr));


// Now very imp thing, Slice and Splice
console.log("A ",myArr);

const n1= myArr.slice(1,3);           // index 1 se start and index 3 se pehle stop
console.log("b ", myArr);             // naya array bana ke value print krtq h, main arrya me koi chage nhi krta
console.log(n1)

const n2 = myArr.splice(1,3);        // isme index 1 se start hota h or 3rd element tk DELETE kr deta h
console.log("C", myArr);             // naya array bana ke value print krta h, main element se delete kr deta h 
console.log(n2);