import { useContext } from "react";
import movieSearchContext from "../Context/context-provider";
import ResultCard from "./ResultCard";
import classes from "./TVResult.module.css";

export default function TVResult() {
  const { movieFound } = useContext(movieSearchContext);
  return (
    <ResultCard className={classes.center}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movieFound.backdrop_path}`}
          alt={movieFound.name}
          className={classes.background}
        ></img>
      </div>
      <div className={classes.format}>
        <div className={classes.imageHeader}>
          <img
            src={`https://image.tmdb.org/t/p/original${movieFound.poster_path}`}
            alt={movieFound.name}
          ></img>
          <div className={classes.ratings}>
            <p>{movieFound.vote_average}⭐</p>
            <p>🧡{Math.ceil(movieFound.vote_count / 100) * 100}</p>
          </div>
        </div>
        <div>
          <div className={classes.title}>
            <h3>{movieFound.name}</h3>
            <p>{movieFound.first_air_date.substr(0, 4)}</p>
          </div>
          <p>{movieFound.overview}</p>
        </div>
      </div>
    </ResultCard>
  );
}
