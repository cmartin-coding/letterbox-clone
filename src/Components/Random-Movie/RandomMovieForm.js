import classes from "./RandomMovieForm.module.css";
import { useState } from "react";
export default function RandomMovieForm(props) {
  const [genreSelected, setGenreSelected] = useState(undefined);
  const genreHandler = (ev) => {
    setGenreSelected(ev.target.value);
  };

  const sendUserSelection = (ev) => {
    ev.preventDefault();
    if (genreSelected === undefined || genreSelected === "") {
      return;
    } else {
      props.onRetrieveUserSelection(genreSelected);
      setGenreSelected("");
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
