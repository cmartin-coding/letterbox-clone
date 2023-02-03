import { useContext, useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import { GetHomePage } from "../API_Calls/GetHomePage";
import HomePageSlider from "./HomePageSlider";
import SearchResult from "../Result-UI/SearchResult";

import PageTemplate from "../UI-Pages/PageTemplate";
import RandomMovieForm from "../Random-Movie/RandomMovieForm";
import movieSearchContext from "../Context/context-provider";
export default function HomePage() {
  const [moviesInTheatre, setMoviesInTheatre] = useState([]);
  const [activeMoviesSlider, setActiveMoviesSlider] = useState([]);
  const [genres, setGenres] = useState([]);

  const searchCtx = useContext(movieSearchContext);

  useEffect(() => {
    GetHomePage().then(([genres, movies]) => {
      setMoviesInTheatre(movies);
      setActiveMoviesSlider([movies[0], movies[1], movies[2], movies[3]]);
      setGenres(genres);
    });
  }, []);

  return (
    <PageTemplate>
      <div className={classes.container}>
        <div className={classes.center}>
          <h2 className={classes.header}>Popular Movies in Theatres</h2>
          <HomePageSlider
            movies={moviesInTheatre}
            slider={activeMoviesSlider}
            setSlider={setActiveMoviesSlider}
          />
        </div>
        {searchCtx.searchFound && <SearchResult />}
        <RandomMovieForm genres={genres} />
      </div>
    </PageTemplate>
  );
}
