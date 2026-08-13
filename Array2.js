const marvel = ["Ironman", "Spiderman", "thor"];
const dc = ["Flash", "Suparman", "Batman"];

// // marvel.push(dc);

// // console.log(marvel);     // now the forth element is whole array of DC

// const newArr = marvel.concat(dc);     // it adds all the element of both the arrays.

// console.log(newArr);

// // there's one more very intresting Spread operator;

// const new_arr = [...marvel,...dc];    //using ... spreads all the elemnts of the array

// console.log(new_arr);

// const n1 = [1,2,3,[4,5,6],[7,8,[10,20,30]]];
// // now if we want that all the elements gets into one array, no nested array, then we use 'flat'

// const new_n1 = n1.flat(Infinity);   // in brackets we give the depth, like if we want that it goose to 2 level only, but if we want to get all the elements, we simply use infinity 
// console.log(new_n1);


// isArray to check; 'From' to convert in aray

console.log(Array.isArray("Rohan"));
console.log(Array.from("Rohan"));

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3));