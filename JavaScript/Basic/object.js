// object -> group of key : value pair
// key : value -> property
// key : function -> method

let cap= {
    name: "Steve", 
    "last name": "Rogers", //if value key has spaces than put it in curly braces
    address: {
        city: "Katihar",
        state: "Bihar",
    },
    age: 23,
    isAvenger: true,
    movies: ["Avenger", "Winter Soldier", "Iron Man"],
    sayHi: function(){
        console.log("this is function");
        return "rohit";
    }
}

// 1. get
// console.log(cap.name);
// console.log(cap.movies[0]);
// console.log(cap.sayHi());
// cap.sayHi();

// 2. set/ update
// console.log(cap);
// cap.age= 24;
// cap.movies[0]= "faltu";
// cap.friends= ["tony", "Bruce"];
// console.log(cap);

// 3. delete
// delete cap.address;

// for(let key in cap){
//     console.log(key, ": ", cap[key]);
// }

// *******
// let propKey= "age";
// console.log(cap.age);
// console.log(cap[propKey]);
// console.log(cap["age"]);

// console.log(cap.xyz);


