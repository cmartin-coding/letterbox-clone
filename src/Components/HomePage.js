import { useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import { GetHomePage } from "./API_Calls/GetHomePage";
import HomePageSlider from "./HomePageSlider";
import SearchResult from "./SearchResult";
export default function HomePage(props) {
  const [moviesInTheatre, setMoviesInTheatre] = useState([]);
  const [activeMoviesSlider, setActiveMoviesSlider] = useState([]);
  useEffect(() => {
    GetHomePage().then(([genres, movies]) => {
      setMoviesInTheatre(movies);
      setActiveMoviesSlider([movies[0], movies[1], movies[2], movies[3]]);
    });
  }, []);

  const overlayClickHandler = () => {
    props.setSearchFound(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.center}>
        <h2 className={classes.header}>Popular Movies in Theatres</h2>
        <HomePageSlider
          movies={moviesInTheatre}
          slider={activeMoviesSlider}
          setSlider={setActiveMoviesSlider}
        />
      </div>
      {props.searchFound && (
        <SearchResult
          searchResult={props.searchResult}
          onConfirm={overlayClickHandler}
          mediaType={props.mediaType}
        />
      )}
    </div>
  );
}
