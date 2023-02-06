import { useContext, useState } from "react";
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
    <div className="flex relative pt-10 gap-5">
      <button className="pointer" onClick={moveLeftHandler}>
        <img src={left} alt="left-slider" className="w-16" />
      </button>
      {props.slider.map((movie, index) => (
        <div key={index} className="flex flex-col items-center">
          <button className="hover:border-2 hover:border-green-500  rounded-xl border-2 rounded-xl">
            <img
              className="w-64 rounded-xl"
              key={index}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              onClick={() => {
                movie.media_type = "movie";
                search(movie);
              }}
            ></img>
          </button>
          <div key={index + 10} className="rating">
            <p className="text-white">⭐{movie.vote_average}</p>
            <p className="text-white">
              🧡{Math.ceil(movie.vote_count / 100) * 100}
            </p>
          </div>
        </div>
      ))}
      <button className="slider" onClick={moveRightHandler}>
        <img src={right} alt="right-slider" className="w-16" />
      </button>
    </div>
  );
}
