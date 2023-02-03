import ResultCard from "./ResultCard";
import classes from "./Person.module.css";
import { useContext } from "react";
import movieSearchContext from "../Context/context-provider";
export default function PersonResult(props) {
  const { movieFound } = useContext(movieSearchContext);

  return (
    <ResultCard className={classes.center}>
      <div className={classes.format}>
        <div className={classes.imageHeader}>
          <img
            src={`https://image.tmdb.org/t/p/original${movieFound.profile_path}`}
            alt={movieFound.name}
          ></img>
        </div>
        <div>
          <div className={classes.title}>
            <h3>{movieFound.name}</h3>
          </div>
          {movieFound.known_for.map((movies) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
                alt={movies.title}
                key={movies.release_date}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </ResultCard>
  );
}
