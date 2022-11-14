import ResultCard from "./ResultCard";
import classes from "./Person.module.css";
export default function PersonResult(props) {
  return (
    <ResultCard className={classes.center}>
      <div className={classes.format}>
        <div className={classes.imageHeader}>
          <img
            src={`https://image.tmdb.org/t/p/original${props.searchResult.profile_path}`}
            alt={props.searchResult.name}
          ></img>
        </div>
        <div>
          <div className={classes.title}>
            <h3>{props.searchResult.name}</h3>
          </div>
          {props.searchResult.known_for.map((movies) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </ResultCard>
  );
}
