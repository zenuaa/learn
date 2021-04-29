'use strict';
 const numberOfFilms = prompt('How many films have you watched?');
 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
 };

const questOnePart1 = prompt('One of the last watched films');
const questOnePart2 = prompt('How mutch do you rate it');
const questTwoPart1 = prompt('One of the last watched films');
const questTwoPart2 = prompt('How mutch do you rate it');
 
const movies = {};
movies[questOnePart1] = questOnePart2;
movies[questTwoPart1] = questTwoPart2;
console.log(personalMovieDB);
console.log(movies);
