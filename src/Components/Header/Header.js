import logo from "../Images/logo.png";
import SearchResult from "../Result-UI/SearchResult";
import classes from "./Header.module.css";
import { GetMovieSearch } from "../API_Calls/GetMovieSearch";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [movieSearch, setMovieSearch] = useState();
  const [searchFound, setSearchFound] = useState(false);
  const [mediaType, setMediaType] = useState("");
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

  const overlayClickHandler = () => {
    setSearchFound(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <div className={classes.logoContainer}>
          <img
            className={classes.image}
            src={logo}
            alt="letterbox-logo"
            width={200}
          ></img>
        </div>
        <div className={classes.headerBodyContainer}>
          <Link to="sign-in">Sign-In</Link>
          <button>Create Account</button>
          <button>Films</button>
          <button>Lists</button>
          <button>Members</button>
          <button>Journal</button>
          <SearchForm onSearch={searchHandler} />
        </div>
      </div>
      {searchFound && (
        <SearchResult
          searchResult={movieSearch}
          onConfirm={overlayClickHandler}
          mediaType={mediaType}
        />
      )}
    </div>
  );
}
