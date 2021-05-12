'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () { // ask - How many movies did you watch?
        this.count = prompt('How many movies have you watched?');
    },
    rememberMyFilms: function () { // asking about 2 last watched movies and rate them..
        let i = 0,
            questOnePart1,
            questOnePart2,
            mass = 'One';


        do {
            questOnePart1 = prompt(mass + ' of the last watched films?').toLocaleLowerCase();
            if (!questOnePart1 || questOnePart1.length > 50) {
                continue;
            }
            questOnePart2 = prompt('How mutch do you rate it?');
            if (!questOnePart2 || isNaN(questOnePart2)) {
                continue;
            }
            this.movies[questOnePart1] = questOnePart2;
            mass = 'Second';
            i++;
        }
        while (i < 2);
    },
    detectPersonalLevel: function () { //detect watchmen lvl
        if (personalMovieDB.count < 10) {
            console.log('Too few movies watched.');
        } else if (personalMovieDB.count > 9 && personalMovieDB.count < 31) {
            console.log('You are a classic viewer.');
        } else if (personalMovieDB.count > 30) {
            console.log('You are a movie fan.');
        } else {
            console.log('An arror has occurrated.');
        }
    },
    showMyDB: function () { // return this object
        if (!this.privat) {
            return this;
        }
    },
    toggleVisibleMyDB: function () { // chage this.privat to true or false
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    },
    writeYourGenres: function () { // asking about your 3 favorit genres and show them to console..
        for (let i = 0, q; i < 3; i++) {
            q = prompt(`Your favorit genre by number ${i+1}`).toLocaleLowerCase();
            if (!q) {
                i--;
                continue;
            }
            this.genres[i] = q;
        }
        // let i = 0;
        // while (i < 3) {
        //     let q = prompt(`Your favorit genre by number ${i+1}`);
        //     if (!q) {
        //         continue;
        //     }
        //     this.genres[i] = q;
        //     i++;
        // }
        this.genres.forEach(function (item, index) {
            console.log(`Favorit genres #${index + 1} - it's ${item}.`);
        });
    },

};