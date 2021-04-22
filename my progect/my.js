"use strict";
let user = {
    nam: 'zenua',
    age: 32,
};

let val = 1;
for  (let key in user){
    console.log(val + ': ' + user[key]);
    val++;
}





// function Calculator() { // todo  функция конструктор (обычная фун. только имя с заглавной)
                             // todo this ссылается на созданую пустую функцию через new
//     this.calculate = function (str) {
//         let arr = str.split(" ");
//         console.log(arr);
//         let x = +arr[0];
//         let y = +arr[2];
//         if (arr[1] == "+") {
//             return x + y;
//         } else if (arr[1] == '-') {

//             return x - y;
//         }
//     };
// }
// let summ = new Calculator();
// console.log(summ);
// console.info(summ.calculate('3 - 9'));




// function sum(str) {
//     let arr = str.split(" ");
//     console.log(arr);
//     let x = +arr[0];
//     let y = +arr[2];
//     if (arr[1] == "+"){
//         return x +y ;
//     }
//     else if(arr[1] == '-'){
        
//         return x - y;
//     }
// }

// console.log(sum('1 - 2'));
