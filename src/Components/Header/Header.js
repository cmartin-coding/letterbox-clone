import logo from "../Images/logo.png";
import SearchResult from "../Result-UI/SearchResult";
import classes from "./Header.module.css";
import { useContext } from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import movieSearchContext from "../Context/context-provider";

export default function Header(props) {
  const { searchFound } = useContext(movieSearchContext);

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
          <SearchForm />
        </div>
      </div>
      {searchFound && <SearchResult />}
    </div>
  );
}
