// function fn(param){
//     console.log("this is Rohit", param);
// }

// //pass by value
// fn(10);
// fn(10.1);
// fn("Hello");

// //Array, Obj -> pass by ref
// let arr= [1, 2, 3, 4, 5];
// fn(arr);
// let obj= {
//     name: "Rohit",
// }
// fn(obj)

//js function are treated as a variable
//function as a parameter
//function that accepts or returns a function known as higher order function
//chFn that is passed to another is known as callback function that will later called
// inside a higher order function

// function fn(param){
//     console.log("I am function", param);
//     param();
// }

// function chFn(){
//     console.log("I am chota fn");
// }

// fn(chFn);


// let a= [1, 2, 3, 4, 5];
// let b= a;
// console.log(b);
// //function expression
// let exp= function fn(){
//     console.log("I am an exp");
// }
// exp();

//2 types of 
//IIFE -> immediate invoked function expression
// (function (param){
//     console.log("I am IIFE ", param);
// })(10);

//Arrow Function 
//Small syntax
// let singleLine= param => console.log("I am exp", param);
// singleLine(10);

// let MultipleLineSingleParam= param => {
//     console.log("I am an exp ", param);
//     console.log("I am multiple line");
// }
// MultipleLineSingleParam(100)

let MultipleLineMultipleParam= (param1, param2) =>{
    console.log("I am an exp ", param1, param2);
    console.log("I am multiple line");
}
MultipleLineMultipleParam(50, 100);😂😂




