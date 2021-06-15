" use strict ";
let pictureDB = [{
        name: 'Swallow',
        url: 'image/bird.gif',
        moreInformation: 'https://en.wikipedia.org/wiki/Barn_swallow'
    },
    {
        name: 'Cat',
        url: 'image/cat.gif',
        moreInformation: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0'
    },
    {
        name: 'Fish',
        url: 'image/fish.gif',
        moreInformation: 'https://ru.wikipedia.org/wiki/%D0%A0%D1%8B%D0%B1%D1%8B'
    },
    {
        name: 'Hand',
        url: 'image/hand.gif',
        moreInformation: 'https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%BA%D0%B0'
    },
    {
        name: 'Pumpkin',
        url: 'image/pumpkin.gif',
        moreInformation: 'https://ru.wikipedia.org/wiki/%D0%A5%D1%8D%D0%BB%D0%BB%D0%BE%D1%83%D0%B8%D0%BD'
    },
    {
        name: 'Sun',
        url: 'image/sun.gif',
        moreInformation: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B5'
    },

];

const someId = document.getElementById('id'), // some String have id
    querySelect = document.querySelectorAll('.clas')[0], // some String have class
    querySelectParent = querySelect.parentNode, // main div with our all strings
    allButton = document.getElementsByTagName('button'), // buttons on the page
    allDiv = document.querySelectorAll('div'), // all div on the page
    picture = document.querySelector('#swallowe'); // animation

allButton[2].hidden = true;
allButton[2].style.backgroundColor = 'rgb(174, 242, 187)';
allButton[3].style.backgroundColor = 'rgb(91, 186, 227)';

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
            item.style.background = 'url(image/gradientGreen.png) repeat-y';
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

const rightCol = document.querySelector('.col-md-8'),
    moreInformationLink = document.createElement('a');
moreInformationLink.setAttribute('href', 'https://en.wikipedia.org/wiki/Barn_swallow');
moreInformationLink.innerHTML = '<p>More informations about swallow.</p>';
rightCol.append(moreInformationLink);
moreInformationLink.setAttribute('class', 'card-link');
moreInformationLink.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '15px';
    event.target.style.textDecoration = 'underline';
});
moreInformationLink.addEventListener('mouseout', (event) => event.target.style.fontSize = '1rem');

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
        ulPage[0].textContent = `pageX: ${parseFloat(valPageX).toFixed(10)}`;
        ulPage[1].textContent = `pageY: ${parseFloat(valPageY).toFixed(10)}`;
    }, {
        passive: true
    });
    picture.addEventListener('touchmove', (e) => {
        // e.preventDefault();
        // e.stopPropagation();
        valMoveX = e.touches[0].pageX;
        valMoveY = e.touches[0].pageY;
        ulPage[2].textContent = `pageX: ${parseFloat(valMoveX).toFixed(10)}`;
        ulPage[3].textContent = `pageY: ${parseFloat(valMoveY).toFixed(10)}`;
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
        allButton[3].hidden = true;
        allButton[2].hidden = false;
        const z = document.createElement('br');
        z.id = 'createDiv';
        if (!document.querySelector('#createDiv')) {
            document.querySelector('#swallowe').before(z);
        }
    },
    showPicture = () => {
        picture.hidden = false;
        allButton[3].hidden = false;
        allButton[2].hidden = true;
        if (document.querySelector('#createDiv')) {
            document.querySelector('#createDiv').remove();
        }

    };
allDiv[9].children[0].classList.add('display-6');
let strInfoPicture = document.links[6].children[0].textContent.slice(0, 24);
allButton[3].addEventListener('click', hidePicture);
allButton[2].addEventListener('click', showPicture);

document.querySelectorAll('.btn-primary').forEach((item, index) => {
    item.parentNode.classList.add('btn-group-vertical');
        item.addEventListener('click', () => {
        picture.src = pictureDB[index].url;
        moreInformationLink.textContent = strInfoPicture + `${pictureDB[index].name.toLowerCase()}`;
        allDiv[9].children[0].textContent = pictureDB[index].name;
        moreInformationLink.href = pictureDB[index].moreInformation;
    });
});
