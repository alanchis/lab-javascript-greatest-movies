const movies = require('./data');
//console.log(movies)

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

  return  arr.map((mov => mov.director))      

}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

const spielbergDrama = arr.filter((mov) => {
if (mov.director === "Steven Spielberg" && mov.genre.includes ("Drama")) return mov
})

return spielbergDrama.length

}

console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {


  if (arr.length === 0) return 0;
  let total = arr.reduce((pre,act) =>{
    if (act.score !== '' && act.score){
      return pre = pre + act.score;
    }
    return pre
  },0)/arr.length;
  return Number (total.toFixed (2))

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter((movie) => {
    if (movie.genre.includes('Drama')) {
      return movie;
    }
  });
  return scoresAverage(dramaMovies);
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let movieYear = arr.map(movie => movie)
  movieYear.sort((a, b) => a.year - b.year)


  return movieYear    
 

}
console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  
  let ordenado = arr.map((movie) => {return movie.title;})
  ordenado.sort();
  console.log(ordenado)
  let matriz = [];
if (arr.length <= 20){
    for(i = 0; i < arr.length; i++){
    matriz.push(ordenado[i])
  }
  return matriz
  }else{
    for(i = 0; i < 20; i++){
    matriz.push(ordenado[i])
  }
return matriz
  }
  
}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
