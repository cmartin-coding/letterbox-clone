const API_KEY =
  "api_key=c186bce5df7ee4d6e173dad7e6051161&language=en-US&page=1";
const API_URL = "https://api.themoviedb.org/3/movie/now_playing?";
export async function GetMoviesInTheatre() {
  const response = await fetch(API_URL + API_KEY);
  const movieResponse = await response.json();
  const movieData = movieResponse.results;
  return movieData;
}
