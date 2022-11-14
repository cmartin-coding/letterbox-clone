const API_KEY = "c186bce5df7ee4d6e173dad7e6051161";

export async function GetMovieSearch(userInput) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${userInput}&page=1&include_adult=false`
  );
  const movieResponse = await response.json();
  const foundMovie = movieResponse.results[0];
  return foundMovie;
}
