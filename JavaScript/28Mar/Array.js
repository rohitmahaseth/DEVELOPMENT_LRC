//declaration of 1D- Array
let arr= [];
// console.log();

//2D- Array
let b= [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(b);

//1D- Array
//no idx out of bound
let a = [1, 2, 3, 4 ,5, 6];

//traverse in Array
// for(let i= 0; i< a.length; i++){
//     console.log(i+ " : "+ a[i]);
// }


//last element -> add/ remove
// a.pop();
// a.push(10);
// console.log(a);

//first element -> add/ remove
//  a.shift(); //removeFirst
//  a.unshift(20); //addFirst
//  console.log(a);

//copy subarray
// let slicedArray= a.slice(1, 4); //last idx exclusive
//original array remains same
// console.log(slicedArray);


// find idx -> return the idx of variable
// let idx= a.indexOf(4);
// console.log(idx);

//contains -> return boolean value
// let ans= a.includes(3);
// console.log(ans);


//remove a subarrya
//splice(st idx, delete count);
// let splicedArray= a.splice(2, 3);
// console.log("splicedArray: ", splicedArray);
// console.log("OriginalArrya: ",  a);

//no idx out of bound
a[75]= 100;
console.log(a);
console.log(a[10]);
