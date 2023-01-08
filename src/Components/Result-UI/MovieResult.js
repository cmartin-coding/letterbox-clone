import classes from "./MovieResult.module.css";
import ResultCard from "./ResultCard";

export default function MovieResult(props) {
  return (
    <ResultCard className={classes.center}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${props.searchResult.backdrop_path}`}
          alt={props.searchResult.title}
          className={classes.background}
        ></img>
      </div>
      <div className={classes.format}>
        <div className={classes.imageHeader}>
          <img
            src={`https://image.tmdb.org/t/p/original${props.searchResult.poster_path}`}
            alt={props.searchResult.title}
          ></img>
          <div className={classes.ratings}>
            <p>{props.searchResult.vote_average}⭐</p>
            <p>🧡{Math.ceil(props.searchResult.vote_count / 100) * 100}</p>
          </div>
        </div>
        <div>
          <div className={classes.title}>
            <h3>{props.searchResult.title}</h3>
            <p>{props.searchResult.release_date.substr(0, 4)}</p>
          </div>
          <p>{props.searchResult.overview}</p>
        </div>
      </div>
    </ResultCard>
  );
}
