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
    picture = document.querySelector('#swallowe'), // animation
    buttonPrimary = document.querySelectorAll('.btn-primary');

allButton[2].hidden = true;
allButton[2].style.backgroundColor = 'rgb(174, 242, 187)';
allButton[3].style.backgroundColor = 'rgb(91, 186, 227)';

const str = document.createElement('p'),
    strTwo = document.createElement('p'),
    strThree = document.createElement('p'),
    massage = 'I\'m add strind';

//str.textContent = massage + ' -> One';
strTwo.textContent = massage + ' - Two';
strThree.textContent = massage + ' -> Three';

//str.classList.add('test');
strTwo.classList.add('testTwo');
strThree.classList.add('testThree');

//allDiv[4].append(str);
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
    if (item === allP[4] || item === allP[5]) {} else {
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
    event.target.style.fontSize = '17px';
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

// const toTop = document.links[7];
// toTop.hidden = true;
// toTop.classList.add('btn');
// toTop.style.position = 'fixed';
// toTop.style.bottom = '100px';
// toTop.style.right = '100px';
// toTop.addEventListener('click', () => {     // GO TO TOP
//     window.location = '#top';
// });
// window.onload = function(){
//     let toTop = document.createElement('button');
//     toTop.textContent = 'top';
//     toTop.id = 'go-top';
//     toTop.classList.add('btn', 'btn-outline-secondary');
//     document.querySelector('footer').lastElementChild.before(toTop);
//   document.addEventListener('scroll', ()=>{
//     window.scrollY > 350 ? toTop.style.display = 'block': top.style.display = 'none';
//   });    
// };

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

buttonPrimary.forEach((item, index) => {
    item.addEventListener('click', () => {
        picture.src = pictureDB[index].url;
        moreInformationLink.textContent = strInfoPicture + `${pictureDB[index].name.toLowerCase()}`;
        allDiv[9].children[0].textContent = pictureDB[index].name;
        moreInformationLink.href = pictureDB[index].moreInformation;
    });
});

const rowButton = document.querySelector('.btn-group');

// rowButton.addEventListener('click', (event)=>{
//     event.target.nodeName === 'BUTTON' ? console.log("it's button") : console.log("it's div");
// });
document.addEventListener('DOMContentLoaded', () => {

    ulPage[4].addEventListener('click', (e) => {
        e.target.removeEventListener('mouseout', setBackgroundWhite, false);
        e.target.removeEventListener('mouseover', setBackgroundOrange, false);
        e.target.classList.remove('gradientOrange');
        e.target.classList.add('activeShowSize');
        e.target.textContent = `screen.width: ${screen.width}x${screen.height}px`; //show display size
        window.addEventListener('resize', (e) => {
            ulPage[4].textContent = `screen.width: ${screen.width}x${screen.height}px`; //show resize display size
        });
    });
    ulPage[4].style.cursor = 'pointer';
    let setBackgroundOrange = (e) => {
        if (e.target.classList.contains('gradientWhite')) {
            e.target.classList.remove('gradientWhite');
        }
        e.target.classList.add('gradientOrange');
    };
    ulPage[4].addEventListener('mouseover', setBackgroundOrange, false);
    let setBackgroundWhite = (e) => e.target.classList.add('gradientWhite');
    ulPage[4].addEventListener('mouseout', setBackgroundWhite, false);
});

allButton[10].addEventListener('mouseover', (e) => {
    e.target.style.color = 'white';
});
allButton[10].addEventListener('mouseout', (e) => {
    e.target.style.color = 'rgb(4, 61, 88)';
});

let autoChage,
    stopChandeImage;
const autoChageImages = (p = pictureDB, m = moreInformationLink, b = buttonPrimary, act = 'btnGroupActive', ) => {
    picture.src = p[0].url;
    m.textContent = strInfoPicture + `${p[0].name.toLowerCase()}`;
    allDiv[9].children[0].textContent = p[0].name;
    b[5].classList.remove(act);
    b[0].classList.add(act);
    if (stopChandeImage === true) {
        //clearTimeout(cat);
        return false;
    }
    const cat = setTimeout(() => {
        picture.src = p[1].url;
        m.textContent = strInfoPicture + `${p[1].name.toLowerCase()}`;
        allDiv[9].children[0].textContent = p[1].name;
        b[0].classList.remove(act);
        b[1].classList.add(act);
        if (stopChandeImage === true) {
            clearTimeout(cat);
            return false;
        }
        const fish = setTimeout(() => {
            picture.src = p[2].url;
            m.textContent = strInfoPicture + `${p[2].name.toLowerCase()}`;
            allDiv[9].children[0].textContent = p[2].name;
            b[1].classList.remove(act);
            b[2].classList.add(act);
            if (stopChandeImage === true) {
                clearTimeout(fish);
                return false;
            }
            setTimeout(() => {
                picture.src = p[3].url;
                m.textContent = strInfoPicture + `${p[3].name.toLowerCase()}`;
                allDiv[9].children[0].textContent = p[3].name;
                b[2].classList.remove(act);
                b[3].classList.add(act);
                setTimeout(() => {
                    picture.src = p[4].url;
                    m.textContent = strInfoPicture + `${p[4].name.toLowerCase()}`;
                    allDiv[9].children[0].textContent = p[4].name;
                    b[3].classList.remove(act);
                    b[4].classList.add(act);
                    setTimeout(() => {
                        picture.src = p[5].url;
                        m.textContent = strInfoPicture + `${p[5].name.toLowerCase()}`;
                        allDiv[9].children[0].textContent = p[5].name;
                        b[4].classList.remove(act);
                        b[5].classList.add(act);
                        autoChageImages();
                    }, 5000);
                }, 6000);
            }, 6000);
        }, 8000);
    }, 5850);
};

const removeBtnGroupActive = () => {
buttonPrimary.forEach(item => item.classList.remove('btnGroupActive'));
};

allButton[10].addEventListener('click', (e) => {
    e.target.textContent = 'Auto change applied ';
    removeBtnGroupActive();
    autoChage = setTimeout(autoChageImages, 1);
}, {once: true});

allButton[11].addEventListener('click', () => {
    location.reload();
});