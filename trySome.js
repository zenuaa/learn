" use strict ";
let x = 0;
let someFun = function () {
    let y = 4;
    return x + y;
};


console.log(x);
console.dir(someFun);
// function Count(x) {
//     let f = function (y) {
//         return ++x;
//     };
//     return f;
// }
// let countOne = new Count(2);
// console.log(countOne(3));
// console.log(countOne(2));
// console.dir(countOne);
// let countTwo = new Count(5);
// console.log(countTwo(5));
// console.dir(countTwo);

// function mainAdd(valC) {
      
//      return function add(someNumber) {
//         let count;
//         count = valC + someNumber;
//         return count;
//     };
// }
// let mainCount = new mainAdd(2);
// console.log(mainCount(1));

// function Сounter() {
//     let x = 0,
//     e = 999;
//     console.warn(x + ' value of var-x');
//     let y = function () {
//         x += e;
//         console.warn( x+ ' value of var-x++');
//         return x;
//     };
//     return y;
// }
// let countOne = new Сounter();
// console.log('\t'+ countOne() + ' - console');
// console.dir(countOne);

// console.log('\t'+ countOne() + ' - console');
// console.log('\t'+ countOne() + ' - console');
// console.dir(countOne);

// let w = 111;
// function someFunc() {
//    let e = 1;
//     return (w + e);
// }
// console.dir(someFunc);