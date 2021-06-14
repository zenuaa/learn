" use strict ";
let qwe = 12;
const someId = document.getElementById('id'), // some String have id
    querySelect = document.querySelectorAll('.clas')[0], // some String have class
    querySelectParent = querySelect.parentNode, // main div with our all strings
    allButton = document.getElementsByTagName('button'), // buttons on the page
    allDiv = document.querySelectorAll('div'), // all div on the page
    picture = document.querySelector('#swallowe'); // animation

allButton[2].style.margin = '5px';
allButton[3].style.margin = '5px';
picture.style.marginRight = '80px';
picture.style.marginBottom = '10px';
//allButton[2].style.float = 'left';
//allButton[3].style.float = 'left';

const str = document.createElement('p'),
    strTwo = document.createElement('p'),
    strThree = document.createElement('p'),
    massage = 'I\'m add strind';

str.textContent = massage + ' -> One';
strTwo.textContent = massage + ' - Two';
strThree.textContent = massage + ' -> Three';

str.classList.add('test');
strTwo.classList.add('testTwo');
strThree.classList.add('testThree');

allDiv[4].append(str);
const par = document.querySelectorAll('p');
allDiv[4].prepend(strTwo);

//allDiv[4].insertBefore(strThree, document.querySelectorAll('.test')[0]);

allDiv[4].replaceChild(strThree, strTwo);
//querySelectParent.removeChild(strThree);
//someId.remove();
someId.insertAdjacentHTML("beforebegin", '<p>Im Adjacent sting -> Four</p>');
allDiv[4].querySelectorAll('p')[1].classList.add('testFour');

const
    allP = document.querySelectorAll('p'); // all p on the page


allP.forEach(function (item, index) { //add events to descriptors p
    if (item === allP[5]) {} else {
        item.addEventListener('mouseover', (event) => {
            item.style.backgroundImage = 'url(image/gradientGreen.png)';
        });
        item.addEventListener('mouseout', () => item.style.backgroundImage = 'url(image/gradientWhite.png)');
        item.addEventListener('click', (event) => {
            item.style.backgroundImage = 'url(image/gradientRed.png)';
            //event.target.remove();
        });
    }
});

picture.addEventListener('mouseover', (event) => event.target.style.borderColor = 'green');
picture.addEventListener('mouseout', (event) => event.target.style.borderColor = ' #dee2e6');

const rightCol = document.querySelector('.col-5'),
    swallowLink = document.createElement('a');
swallowLink.setAttribute('href', 'https://en.wikipedia.org/wiki/Barn_swallow');
swallowLink.innerHTML = '<p>More informations about swallow.</p>';
rightCol.append(swallowLink);
swallowLink.setAttribute('class', 'card-link');
swallowLink.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '18px';
    event.target.style.textDecoration = 'underline';
});
swallowLink.addEventListener('mouseout', (event) => event.target.style.fontSize = '1rem');

const ulPage = document.querySelectorAll('.list-group-item');
let valPageX,
    valPageY,
    valMoveX,
    valMoveY;
window.onload = () => {
    picture.addEventListener('touchstart', (e) => {
        // e.preventDefault();
        // e.stopPropagation();
        valPageX = e.touches[0].pageX;
        valPageY = e.touches[0].pageY;
        ulPage[0].textContent = `pageX: ${valPageX}`;
        ulPage[1].textContent = `pageY: ${valPageY}`;
    }, {
        passive: true
    });
    picture.addEventListener('touchmove', (e) => {
        // e.preventDefault();
        // e.stopPropagation();
        valMoveX = e.touches[0].pageX;
        valMoveY = e.touches[0].pageY;
        ulPage[2].textContent = `pageX: ${valMoveX}`;
        ulPage[3].textContent = `pageY: ${valMoveY}`;
    }, {
        passive: true
    });
};

const toTop = document.links[7];
toTop.classList.add('btn');
toTop.style.position = 'fixed';
toTop.style.bottom = '100px';
toTop.style.right = '100px';
toTop.addEventListener('click', () => {
    window.location = '#top';
});

let hidePicture = () => {
        picture.hidden = true;
        const z = document.createElement('br');
        z.id = 'createDiv';
    if(!document.querySelector('#createDiv')){
        document.querySelector('#swallowe').before(z);
    }       
        },
    showPicture = () => {picture.hidden = false;
        if(document.querySelector('#createDiv')){
        document.querySelector('#createDiv').remove();
        }
        
    };

allButton[3].addEventListener('click', hidePicture);
allButton[2].addEventListener('click', showPicture);







//ulPage[0].textContent += valPageX;
// document.addEventListener('DOMContentLoaded', ()=>{
//     picture.addEventListener('touchstart', (e)=>{
//         e.preventDefault();
//         console.warn(e.changedTouches);
//         console.warn('touch start just happend!');
//     });
//     picture.addEventListener('touchmove', (e)=>{
//         e.preventDefault();
//         console.info('move just happend');
//     });
//     picture.addEventListener('touchend', (e)=>{
//         e.preventDefault();
//         console.log('end');


//     });

// }
// );

//   onclick='document.querySelectorAll("#swallowe")[0].hidden = false'

// let x = 5,
//     y = 2;
// let arr = [1, 2, 3, [x, y], x + y, {
//         valueX: x,
//         valueY: y,
//         sum: x + y
//     }],
//     arrOne = [10, 20, 30, ...arr],
//     obj = {
//         name: 'zenua',
//         age: 32,
//         wife: 'Olga',
//         children: ['Polina', 'Anna', 'Tanua'],
//         [Symbol.toPrimitive]: function (hint) {
//             return obj.hint;
//         }
//     };
// let psevdoObject = {
//     0: 'zenua',
//     1: 32,
//     2: 'Olga',
//     3: ['Polina', 'Anna', 'Tanua'],
//     length: 4
// };


// const task = {
//     string: undefined,
//     installString: function (value) {
//         if (value === undefined) {
//             this.string = '';
//         } else
//         if (isFinite(value)) {
//             this.string = [] + value;
//         } else {
//             this.string = value;
//         }
//     },
//     getString: function () {
//         return this.string;
//     },
//     getStringLength: function () {
//         return this.string.length;
//     },
//     getStringReverse: function () {
//         let str = this.string,
//             srtReverse,
//             arr;
//         arr = str.split('');
//         arr.reverse();
//         srtReverse = arr.join('');
//         return srtReverse;
//     }
// };

// const cal = {
//     val: undefined,
//     setVal: function (value) {
//         if (isFinite(value)) {
//             this.val = value;
//             return this;
//         } else {
//             console.log('ERROR VALUE!');
//         }
//     },
//     add: function (value) {
//         this.val += value;
//         return this;
//     },
//     multiply: function (value) {
//         this.val *= value;
//         return this;
//     },
//     getResult: function () {
//         return this.val;
//     },
//     degree: function (value) {
//         this.val = Math.pow(this.val, value);
//         return this;
//     },
//     divide: function (value) {
//         this.val /= value;
//         return this;
//     }
// };









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

// const objToCopy = {
//     name: 'Olga',
//     ageOLga: 29,
// };

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