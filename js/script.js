const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const nameOfFilm = prompt("Один из последних просмотренных фильмов?", "");
const reviewOfFilm = prompt("На сколько оцените его?", "");

console.log({ nameOfFilm, reviewOfFilm});