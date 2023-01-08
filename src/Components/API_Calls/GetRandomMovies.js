const API_KEY = "c186bce5df7ee4d6e173dad7e6051161&language=en-US";

export default async function GetRandomTvShow(genre) {
  let movieNumber = Math.floor(Math.random() * 19);
  let pageNumber = Math.floor(Math.random() * 5);
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false
      &include_video=false&page=${pageNumber}&with_genres=${genre}&with_watch_monetization_types=free`
    );
    const movieResponse = await response.json();
    movieResponse.results[movieNumber].media_type = "movie";
    return movieResponse.results[+movieNumber];
  } catch (ex) {
    alert(ex);
    return;
  }
}
