" use strict ";
function counter(x){
    return function (y) {
        return x+y;
    };
}

let countOne = new counter(2);
let countTwo = new counter(9);



class FirstClass{
    count = 'first';
    constructor({
        name:name,
        age:age
    }){ this.name = name;
        this.age = age; 
    }
    showHi(){
        console.log('HI');
    }
}

var zen =new FirstClass({name: 'zenua',
age:50});



function FirstObject({
    name:name,
    age:age
}){
    this.name = name;
    this.age = age;
    this.showName = function(){
        return this.name;
    };
    this.showAge = function(){
        return this.age;
    };

}
let objGranpa = {
    ONE: 1,
    logHi: function () {
        console.log('Hi');
    }
};
let zenuaObject = new FirstObject({
    name: 'zenua',
    age: 32
});
console.log(zenuaObject);
FirstObject.prototype.newMethod = function(){
    console.log('hi im newMethod');
};
let olgaObject = new FirstObject('Olga', );


let quest = zenuaObject._proto_ === olgaObject._proto_;
console.log(quest);

//console.log(zenuaObject.__proto__=== FirstObject.prototype);
let strangeObject = new FirstObject({
    name: 'zenua',
    age:50
});


let key = Object.keys(zenuaObject);
let val = Object.values(zenuaObject);
for(let i = 0; i < key.length; i+=1){
    console.log(key[i] +' :- '+ val[i]);
}
console.log(Object.entries(zenuaObject));




let str ={name:1};
let num ='sdfsf';
console.log(str._proto_=== num._proto_);





console.log(null == undefined);

let f = function f() {
    return 1;
};



let newProto = {
    qwe:1,
    asd:2
};
// let objOne = Object.create(objGranpa);                             //create one Object from another as prototype
// objOne.name = 'Im Some Object, witch one method';



// class FamilyObject {                                                // create Class constructor
//     constructor(name, age, children) {
//         this.name = name;
//         this.age = age;
//         this.children = children;
//         this.address = 'Suvorova str. #24_a';
//         this['pet\'s'] = ['Oskar', 'Tigan'];
//     }
//     show() {                                                   //add method 'Show' to the class
//         let request = prompt('What do you want to see: name, age or children?');
//         switch (request.toLocaleLowerCase()) {
//             case 'name':
//                 return this.name;
//             case 'age':
//                 return this.age;
//             case 'children':
//                 return this.children;
//             default:
//                 return 'Input Error!';
//         }
//     }                                                       
//     makeArrayFromObject() {                                         //add method 'make Array' to the class
//         let arrProperties = [];
//         arrProperties = Object.keys(this);
//         return arrProperties;
//     }
//     deleteUndefinedProperties(){                            //add method 'Delete Undefined Properties' to the class
//         for(let key in this){
//             if(this[key] === undefined){
//                 delete this[key];
//             }
//         }
//     }
// }
// let child = {
//     Polina: {
//         name: 'Polina',
//         age: 9
//     },
//     Anna: {
//         name: 'Anna',
//         age: 7
//     },
//     Tanya: {
//         name: 'Tanya',
//         age: 2
//     }
// };

// let childObject = new FamilyObject();
// Object.assign(childObject, child);
// childObject.deleteUndefinedProperties();
// let zenua = new FamilyObject('zenua', 32, childObject );
// zenua.someShit = undefined;



// function FamilyObjectCreate(name, age, children) {        //function constructor + add method to prototype further
//     this.name = name;
//     this.age = age;
//     this.children = children;
//     this.address = 'Suvorova str. #24_a';
//     this['pet\'s'] = ['Oskar', 'Tigan'];
// }
// FamilyObjectCreate.prototype.show = function () {           //add method to prototype 
//     let request = prompt('What do you want to see: name, age or children?');
//     switch (request.toLocaleLowerCase()) {
//         case 'name':
//             return this.name;
//         case 'age':
//             return this.age;
//         case 'children':
//             return this.children;
//         default:
//             return 'Input Error!';
//     }
// };

// let zenua = new FamilyObjectCreate('zenua', 32, {           //create a new object used ours constructor
//     Polina: {
//         name: 'Polina',
//         age: 9
//     },
//     Anna: {
//         name: 'Anna',
//         age: 7
//     },
//     Tanya: {
//         name: 'Tanya',
//         age: 9
//     }
// });
// let Olga = new FamilyObjectCreate('Olga', 29, {Tanua: 2});  //create another object.. like previous






// let str = 'text';
// console.log( typeof(str.toUpperCase() ));

// let arr = [1, 2, 3, 4, ],
//     arrOne = [5, 6, 7, 8, 9],
//     arrTwo = [];
// arrTwo = [...arr, ...arrOne];
// console.log(arrTwo);

const objToCopy = {
    name: 'Olga',
    ageOLga: 29,
};

// let obj = { //обьекты
//     names: 'zenua',
//     age: 32,
//     'children': {
//         'polina': 9,
//         anna: 7,
//         tanya: 2,
//     },
// };
// console.log('children' in obj);


// const newObj = {};
// copy(obj, newObj); // make copy one object to another            


// function copy(someObject, toAnotherObject) { // function copy someObject to anotherObject поверхностная

//     for (const key in someObject) {
//         toAnotherObject[key] = someObject[key];
//     }
// }



// let obj = {                                         //обьекты
//     names: 'zenua',
//     age: 32,
//     children: {
//         polina: 9,
//         anna: 7,
//         tanya: 2,
//     },
//     makeSome: function (text) {                     //метод
//         console.log(text);
//     }
// };
// obj.makeSome('hello');

// const {polina, anna, tanya} = obj.children;        //деструктуризация обькта
// console.log(polina);

// function logHi(x=12, y='Hello', z='google') {           // default value of function argument 
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// logHi(10, 'John', 'zenua');
// logHi();


// function logHi() {           // function in argument another function 
//     console.log('Hi');
// }
// let logGoodBye = () => console.log('Good Bye');

// function mainF(x, y, z) {
//     if (x) {
//         y();
//     } else {
//         z();
//     }
// }
// mainF(0, logHi, logGoodBye);

// function logF() {             // function in argument another function 
//     console.log('HI');
// }
// ;
// function mainF(y){ 
//     y();
// }
// mainF(logF);


// function loop(x){                        //замыкания в цикле 
//function in loop is хреновая штука лучше такое не юзать
//     for(var i = 0; i < x; i++){
//         let f = () => {
//             console.log(i);
//             return i;
//         };
//         f();
//        if ( i == x-1 ){
//             console.dir(f);
//             return f;
//         }

// }
// //console.info(i + ' - Global');
// }

// let l = new loop(7);
// let n = new loop(10);
// console.dir(l);
// l();
// l();





// let x = 0;                          // не нашел замыкания о индусу
// let someFun = function () {         
//     let y = 4;
//     return x + y;
// };
// console.log(x);
// console.dir(someFun);

// function Count(x) {          //замыкание на 2х аргументах
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