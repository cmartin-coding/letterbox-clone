import { useContext, useState } from "react";
import classes from "./HomePageSlider.module.css";
import right from "../Images/slider.png";
import left from "../Images/slider-left.png";
import movieSearchContext from "../Context/context-provider";

export default function HomePageSlider(props) {
  const [sliderPlace, setSliderPlace] = useState(4);
  const { search } = useContext(movieSearchContext);
  const moveRightHandler = () => {
    let arrPostion = sliderPlace;
    let nextMovies = [];
    const theatreMoviesCopy = props.movies;
    if (arrPostion === theatreMoviesCopy.length) {
      console.log("Reached the end");
      return;
    }
    for (let i = 0; i < 4; i++) {
      nextMovies.push(theatreMoviesCopy[arrPostion]);
      arrPostion++;
    }
    const nextMoviesFlat = nextMovies.flat(1);
    setSliderPlace(arrPostion);
    props.setSlider(nextMoviesFlat);
  };

  const moveLeftHandler = () => {
    let arrPostion = sliderPlace - 8;
    let nextMovies = [];
    const theatreMoviesCopy = props.movies;
    if (arrPostion < 0) {
      console.log("Lower end");
      return;
    }
    for (let i = 0; i < 4; i++) {
      nextMovies.push(theatreMoviesCopy[arrPostion]);
      arrPostion++;
    }
    const nextMoviesFlat = nextMovies.flat(1);
    setSliderPlace(arrPostion);
    props.setSlider(nextMoviesFlat);
  };

  return (
    <div className={classes.styleContainer}>
      <button
        className={`${classes.slider} ${classes.left}`}
        onClick={moveLeftHandler}
      >
        <img src={left} alt="left-slider" />
      </button>
      {props.slider.map((movie, index) => (
        <div
          key={index}
          className={classes.posterContainer}
          onClick={() => {
            movie.media_type = "movie";
            search(movie);
          }}
        >
          <img
            className={classes.poster}
            key={index}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div key={index + 10} className={classes.rating}>
            <p>{movie.vote_average}⭐</p>
            <p>🧡{Math.ceil(movie.vote_count / 100) * 100}</p>
          </div>
        </div>
      ))}
      <button className={classes.slider} onClick={moveRightHandler}>
        <img src={right} alt="right-slider" />
      </button>
    </div>
  );
}
