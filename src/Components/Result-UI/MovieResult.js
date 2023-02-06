import { useContext } from "react";
import movieSearchContext from "../Context/context-provider";
import classes from "./MovieResult.module.css";
import ResultCard from "./ResultCard";

export default function MovieResult() {
  const { movieFound } = useContext(movieSearchContext);
  return (
    <ResultCard>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movieFound?.backdrop_path}`}
          alt={movieFound.title}
          className="relative opacity-60 w-full h-44"
        ></img>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <img
            src={`https://image.tmdb.org/t/p/original${movieFound?.poster_path}`}
            alt={movieFound.title}
            className="border border-white h-60"
          ></img>
          <div className={classes.ratings}>
            <p>{movieFound.vote_average}⭐</p>
            <p>🧡{Math.ceil(movieFound?.vote_count / 100) * 100}</p>
          </div>
        </div>
        <div>
          <div className={classes.title}>
            <h3>{movieFound.title}</h3>
            <p>{movieFound?.release_date.substr(0, 4)}</p>
          </div>
          <p>{movieFound?.overview}</p>
        </div>
      </div>
    </ResultCard>
  );
}
