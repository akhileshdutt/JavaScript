
// console.log("hello world")

// /* 
// Data type: Undefind, Null, boolean, String, Symbol, number and object
// */

// var name = "Akhilesh"
// name = 80

// console.log(name);

// let ourname = "culture"    //can run in same function only

// let b =23;
// b=24;
// console.log(b);  // 24

// const pi = 3.14  //can't be changed

// const a = 10;

// console.log(a); // 10


// function test() {
//     if (true) {
//         var a = 10;
//         let b = 20;        //function ke bahar, let variable won't work
//     }

//     console.log(a); // 10
//     console.log(b); // Error
// }


// function myFunc() {
//   if (true) {
//     var x = 10;  // var hai
//   }
//   console.log(x); // ✅ 10 — kaam karta hai!
// }

// function myFunc() {
//   if (true) {
//     let y = 20;  // let hai
//   }
//   console.log(y); // ❌ ReferenceError — kaam nahi karta!
// }


// var myString = "hello, my name is \"Akhilesh\", and I'm from \"Lucknow\"."

// console.log(myString)

// var ch = "Rohan";
// firstLetter = ch[0];
// lastLetter = ch[ch.length-1]
// //ch[0] = "M";  // it will not change, as Strings are immutable, the can not be changed here, you can chnage the string only where you initialized

// console.log(firstLetter)
// console.log(lastLetter)

// function worldBank(a,b,c,d){
//     var result = "";

//     result += "the "+ a + " "+ b +" "+ c + " to the store "+d; 
//     return result;
// }

// console.log(worldBank("dog", "big", "ran", "quickly"));

// // nested array  
// var xyz = [["Rohan", 23], ["ravi", 28]]


// var ourArray = [10,20,30];
// var ourData = ourArray[0];   // it will print the array on 0th position
// console.log(ourData)
// console.log(ourData)

// ourArray[0] = 40;
// console.log(ourArray)

// var Array = [[1,2,3], [4,5,6], [7,8,9], [[10,20,30],[40,50,60]]];
// console.log(Array[3][0][1]);


// // Push, Pop and shift & unshift  function

// // to add elemnts in an array we'll use .push 
// var cArray = ["rohan", "Ravi", "Raj"];
// cArray.push("kajal", "mum");
// console.log(cArray);          // [ 'rohan', 'Ravi', 'Raj', 'kajal', 'mum' ]

// // to remove last element of array
// var removedLastEle = cArray.pop();                     
// console.log(removedLastEle);    // mum
// console.log(cArray);

// // to remove first function
// var removedFirstEle = cArray.shift();
// console.log(removedFirstEle);
// console.log(cArray);

// // unshift function add the element in the beginning of the array, unlike push that add the element in the last
// cArray.unshift("rohan");
// console.log(cArray);

// function test(a,b){
//     console.log(a+b);
// }
// test(10,20);


// // global Scope and function 
// //Scope refers to the visibility of function.

// var myGlobal = 10;
 
// function fun1(){
//     oopsGlobal = 19;   // as i've not defined it, so now this is global funciton
//  }

// function fun2(){
//     var output ="";
//     if(typeof myGlobal != undefined){
//         output += "myGlobal -> "+ myGlobal;
//     }
//     if(typeof oopsGlobal != undefined){
//         output += " oopsGlobal -> "+oopsGlobal;
//     }
//     console.log(output);
// }

// fun1();
// console.log(" ");
// fun2();


// //global vs local scope in function

// var outerwear = "T-shirt";
// function ootd(){

//     var outerwear = "Shirt";
//     return outerwear;
// }

// console.log(ootd());
// console.log(outerwear);


// //Stand in Line 

// function nextInLine(arr, item){
//     arr.push(item);
//     return item;
// }
// var testArr = [1,2,3,4,5];
// console.log("Before: "+ JSON.stringify(testArr));
// nextInLine(testArr, 6);
// console.log("After: "+ JSON.stringify(testArr));


// // Switch In Case
// function switchInCase(val){
//     var answer="";
//     switch(val){
//         case 1:
//             answer = "Alpha";
//             break;
//         case 2:
//             answer= "beta";
//             break;
//         case 3:
//             answer = "gaama";
//             break;
//         default:
//             answer = "nothing";
//             break;
//     }
//     return answer;
// }

// console.log(switchInCase(2));

// //card case

// var count = 0;
// function cc(card){
//     switch(card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case 'J':
//         case 'Q':
//         case 'K':
//         case 'A':
//             count--;
//             break;
//     }

//     var holdbet = "Hold";
//      if(count<0){
//         holdbet = "Bet";
//      }

//     return count + " " + holdbet;
// }

// cc(2);
// cc(3);
// cc('k');
// cc('A');
// cc(7);
// console.log(cc(4));

var myDog = {
    "name" : "rocky",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["Rohan", "Ravi"] // have 2 firnds, this is an array.
}; 

var numberOfLeg = myDog.legs;

// if you want to change the name: 
myDog.name = "tuffy";