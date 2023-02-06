import search from "../Images/search.png";
import { useContext, useState } from "react";
import movieSearchContext from "../Context/context-provider";
export default function SearchForm(props) {
  const [userInput, setUserInput] = useState("");
  const { searchBar } = useContext(movieSearchContext);
  const userInputHandler = (ev) => {
    setUserInput(ev.target.value);
  };
  const submitFormHandler = (ev) => {
    ev.preventDefault();
    searchBar(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={submitFormHandler}>
      <fieldset className="flex w-min h-min p-0 relative pl-10">
        <input
          onChange={userInputHandler}
          type="text"
          id="filmSearch"
          name="filmSearch"
          className="rounded-xl"
          value={userInput}
          autoComplete="on"
        ></input>
        <button type="submit" className="absolute right-1 bottom-1 pointer">
          <img src={search} alt="Search" className="h-4" />
        </button>
      </fieldset>
    </form>
  );
}
