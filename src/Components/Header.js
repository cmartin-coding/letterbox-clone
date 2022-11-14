import logo from "../Components/Images/logo.png";

import classes from "./Header.module.css";
import SearchForm from "./SearchForm";
export default function Header(props) {
  const searchHandler = (userInput) => {
    props.onSearch(userInput);
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
          <button>Sign In</button>
          <button>Create Account</button>
          <button>Films</button>
          <button>Lists</button>
          <button>Members</button>
          <button>Journal</button>
          <SearchForm onSearch={searchHandler} />
        </div>
      </div>
    </div>
  );
}
