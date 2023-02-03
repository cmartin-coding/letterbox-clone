import { createContext, useState } from "react";
import GetRandomTvShow from "../API_Calls/GetRandomMovies";
import { GetMovieSearch } from "../API_Calls/GetMovieSearch";
const movieSearchContext = createContext({
  search: () => {},
  searchBar: () => {},
  showRandomMovie: () => {},
  searchFound: false,
  movieFound: "",
  mediaType: "",
  closeModal: () => {},
});

export function MovieContext(props) {
  const [searchFound, setSearchFound] = useState(false);
  const [movieSearch, setMovieSearch] = useState();
  const [mediaType, setMediaType] = useState("");

  const searchHandler = (movieClicked) => {
    setMediaType(movieClicked.media_type);
    setMovieSearch(movieClicked);
    setSearchFound(true);
  };

  const searchBarHandler = (userInput) => {
    GetMovieSearch(userInput)
      .then((movie) => {
        setMovieSearch(movie);
        setMediaType(movie.media_type);
      })
      .then(() => {
        setSearchFound(true);
      });
  };

  const showRandomMovie = (genre) => {
    GetRandomTvShow(genre)
      .then((movie) => {
        setMovieSearch(movie);
        setMediaType(movie.media_type);
      })
      .then(() => {
        setSearchFound(true);
      });
  };

  const closeModalHandler = () => {
    setSearchFound(false);
  };

  return (
    <movieSearchContext.Provider
      value={{
        search: searchHandler,
        showRandomMovie: showRandomMovie,
        searchFound: searchFound,
        movieFound: movieSearch,
        mediaType: mediaType,
        closeModal: closeModalHandler,
        searchBar: searchBarHandler,
      }}
    >
      {props.children}
    </movieSearchContext.Provider>
  );
}

export default movieSearchContext;
