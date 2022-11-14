const API_KEY = "c186bce5df7ee4d6e173dad7e6051161&language=en-US";
const API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;

export async function GetGenres() {
  const response = await fetch(API_URL + API_KEY);
  const genreResponse = await response.json();
  const genreData = genreResponse.genres;
  return genreData;
}
