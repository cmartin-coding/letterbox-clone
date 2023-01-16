import classes from "./SearchForm.module.css";
import search from "../Images/search.png";
import { useState } from "react";
export default function SearchForm(props) {
  const [userInput, setUserInput] = useState("");
  const userInputHandler = (ev) => {
    setUserInput(ev.target.value);
  };
  const submitFormHandler = (ev) => {
    ev.preventDefault();
    props.onSearch(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={submitFormHandler}>
      <fieldset className={classes.searchFormat}>
        <input
          onChange={userInputHandler}
          type="text"
          id="filmSearch"
          name="filmSearch"
          className={classes.searchInput}
          value={userInput}
          autoComplete="on"
        ></input>
        <button type="submit" className={classes.search}>
          <img src={search} alt="Search" />
        </button>
      </fieldset>
    </form>
  );
}
