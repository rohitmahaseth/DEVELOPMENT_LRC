//declare
let obj= {};
//key (strings , num): value -> array, obj, function (Js valid datatype)
let cap= {
    name: "Steve", 
    //if u want to put space than key will be in " ";
    "last name" : "Roggers",
    isAvenger: false, 
    movies: ["Winter Soldier", "civil war"],
    address: {
        city: "Manhatten", 
        state: "New York", 
    },
    age: 45, 
}

// console.log(cap);

//get
//.noation
// console.log(cap.name);
// console.log(cap.isAvenger);
// console.log(cap.address.city);
// console.log(cap.movies[1]);
//space separated key ->normally key
// console.log(cap["age"]);
// console.log(cap["name"]);
// console.log(cap["last name"]);
// console.log(cap["key"]);
// console.log(cap.key);

// let name= "age";
// console.log(cap[name]); // is equivalent to cap["age"]
// console.log(cap.name);

//if key is present -> update otherwise set
//set
// cap.friends= ["tony", "bruce", "peter"];
// //update
// cap.isAvenger= true;
// console.log(cap);

//delete
// delete cap["last name"]
// console.log(cap);

//traverse
// for(let key in cap){
//     console.log(key, " : ", cap[key]);
// }

// cap.movies.splice[1, 1];
// console.log(cap);




