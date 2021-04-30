'use strict';
const numberOfFilms = prompt('How many films have you watched?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let i = 0,
    questOnePart1,
    questOnePart2,
    mass = 'One';
const movies = {};

do {
    questOnePart1 = prompt(mass + ' of the last watched films?');
    if (!questOnePart1 || questOnePart1.length > 5) {
        continue;
    }
    questOnePart2 = prompt('How mutch do you rate it?');
    if (!questOnePart2) {
        continue;
    }
    movies[questOnePart1] = questOnePart2;
    mass = 'Second';
    i++;
}
while (i < 2);
console.log(personalMovieDB);
console.log(movies);

if (personalMovieDB.count < 10) {
    console.log('Too few movies watched.');
} else if (personalMovieDB.count > 9 && personalMovieDB.count < 31) {
    console.log('You are a classic viewer.');
} else if (personalMovieDB.count > 30) {
    console.log('You are a movie fan.');
} else {console.log('An arror has occurrated.');}