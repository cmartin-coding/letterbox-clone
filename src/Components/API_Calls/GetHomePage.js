import { GetMoviesInTheatre } from "./GetMoviesInTheatre";
import { GetGenres } from "./GetGenres";
import { ConsolidateGenres } from "./ConsolidateGenres";
export async function GetHomePage() {
  const [genres, movies] = await Promise.all([
    GetGenres(),
    GetMoviesInTheatre(),
  ]);
  ConsolidateGenres(genres, movies);
  return [genres, movies];
}
