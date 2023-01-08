import Header from "./Components/Header/Header";
import HomePage from "./Components/Home Page/HomePage";
import { GetMovieSearch } from "./Components/API_Calls/GetMovieSearch";
import "./App.css";
import { useState } from "react";
import RandomMovie from "./Components/Random-Movie/RandomMovie";
import GetRandomTvShow from "./Components/API_Calls/GetRandomMovies";
function App() {
  const [movieSearch, setMovieSearch] = useState();
  const [searchFound, setSearchFound] = useState(false);
  const [mediaType, setMediaType] = useState("");
  const [genres, setGenres] = useState([]);
  const searchHandler = (userInput) => {
    GetMovieSearch(userInput)
      .then((movie) => {
        setMovieSearch(movie);
        setMediaType(movie.media_type);
      })
      .then(() => {
        setSearchFound(true);
      });
  };

  const showMovieSliderHandler = (selectedMovie) => {
    setMediaType(selectedMovie.media_type);
    setMovieSearch(selectedMovie);
    setSearchFound(true);
  };

  const genresHandler = (genres) => {
    setGenres(genres);
  };

  const showRandomMovieHandler = (genre) => {
    GetRandomTvShow(genre)
      .then((movie) => {
        setMovieSearch(movie);
        setMediaType(movie.media_type);
      })
      .then(() => {
        setSearchFound(true);
      });
  };
  return (
    <div className="App">
      <Header onSearch={searchHandler} />
      <HomePage
        searchResult={movieSearch}
        searchFound={searchFound}
        setSearchFound={setSearchFound}
        mediaType={mediaType}
        onRetrieveGenres={genresHandler}
        onSearch={showMovieSliderHandler}
      />
      <RandomMovie genres={genres} onShowRandomMovie={showRandomMovieHandler} />
    </div>
  );
}
export default App;
