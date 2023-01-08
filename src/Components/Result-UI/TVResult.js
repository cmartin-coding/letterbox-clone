import ResultCard from "./ResultCard";
import classes from "./TVResult.module.css";

export default function TVResult(props) {
  return (
    <ResultCard className={classes.center}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${props.searchResult.backdrop_path}`}
          alt={props.searchResult.name}
          className={classes.background}
        ></img>
      </div>
      <div className={classes.format}>
        <div className={classes.imageHeader}>
          <img
            src={`https://image.tmdb.org/t/p/original${props.searchResult.poster_path}`}
            alt={props.searchResult.name}
          ></img>
          <div className={classes.ratings}>
            <p>{props.searchResult.vote_average}⭐</p>
            <p>🧡{Math.ceil(props.searchResult.vote_count / 100) * 100}</p>
          </div>
        </div>
        <div>
          <div className={classes.title}>
            <h3>{props.searchResult.name}</h3>
            <p>{props.searchResult.first_air_date.substr(0, 4)}</p>
          </div>
          <p>{props.searchResult.overview}</p>
        </div>
      </div>
    </ResultCard>
  );
}
