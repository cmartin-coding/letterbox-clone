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
    }
  };

  return (
    <div className="flex justify-center pt-24 pb-24">
      <div className="bg-white w-1/3 p-10 rounded-xl">
        <h3 className="text-center">Find a random movie based on genre!</h3>
        <form onSubmit={sendUserSelection}>
          <div className="flex gap-2 justify-center">
            <div>
              <div className="flex gap-5 pt-5">
                <label htmlFor="genres">Select Genre</label>
                <select
                  name="genres"
                  id="genres"
                  onChange={genreHandler}
                  value={genreSelected}
                  className="border-2 border-slate-500"
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
          <button className="hover:bg-green-500 p-2 border-2 border-slate-400 rounded-xl mt-4 w-full">
            Randomize!
          </button>
        </form>
      </div>
    </div>
  );
}
