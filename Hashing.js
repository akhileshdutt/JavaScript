// array or hash me ek difference ye hai ki array me ham i'th index pe value de sakte h, pr ham i'th index chanege nhi kr sakte h
// jaise agr ham array me value add kr rhe hai to arr 0 se hi start hooga, 
// vahi hashmap me ham index ki value bhi de sakte h.

let m = new Map();

m.set("Akhilesh", 10);
m.set("rohan", 25);
m.set("ballu", 30);
m.set("abhi9", 5);

// console.log(m);
// console.log(m.get("rohan")); 

m.set("Akhilesh", 10);
m.set("rohan", 25);
m.set("ballu", 30);
m.set("abhi9", 5);

// console.log(m.size);

m.set("rohan", 30);

// console.log(m.size);   // the size is still same, because here I just changed the value at index "rohan".


for(t of m){            // this will print all the index and it value in a row.
    // console.log(t[1]);    // ye jo hai 0th index pe rakhta hai, sabke naam, or 1st index pe rakhta h number
}
console.log("-----------------");

for(t of m.values()){          // 1st index pe jo value hoti h, usko values bolte h.
    // console.log(t);
}
console.log("-----------------");

for(t of m.keys()){            // 0th index pe jo value hoti h, usko keys bolte h.
    // console.log(t);
}


// delete a key
m.delete("rohan");

  
  
// to delete the entire thing 
console.log(m);
m.clear();