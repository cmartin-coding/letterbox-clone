import classes from "./RandomMovieForm.module.css";
import { useContext, useState } from "react";
import movieSearchContext from "../Context/context-provider";
export default function RandomMovieForm(props) {
  const [genreSelected, setGenreSelected] = useState(undefined);
  const randomMovieCtx = useContext(movieSearchContext);
  const genreHandler = (ev) => {
    setGenreSelected(ev.target.value);
  };

  const sendUserSelection = (ev) => {
    ev.preventDefault();
    if (genreSelected === undefined || genreSelected === "") {
      return;
    } else {
      randomMovieCtx.showRandomMovie(genreSelected);
      // props.onShowRandomMovie(genreSelected);
      // setGenreSelected("");
    }
  };

  return (
    <div className={classes["main-container"]}>
      <div className={classes["form-container"]}>
        <h3>Find a random movie based on genre!</h3>
        <form onSubmit={sendUserSelection}>
          <div className={classes.searchStyle}>
            <div>
              <div style={{ display: "flex", gap: "5px" }}>
                <label htmlFor="genres">Select Genre</label>
                <select
                  name="genres"
                  id="genres"
                  onChange={genreHandler}
                  value={genreSelected}
                >
                  <option value={""}>Select a genre</option>
                  {props.genres.map((genres) => (
                    <option key={genres.id} value={genres.id}>
                      {genres.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className={classes["style-button"]}>
            <button>Randomize!</button>
          </div>
        </form>
      </div>
    </div>
  );
}
