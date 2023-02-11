import { useContext } from "react";

import HomePageSlider from "./HomePageSlider";
import SearchResult from "../Result-UI/SearchResult";

import PageTemplate from "../UI-Pages/PageTemplate";
import RandomMovieForm from "../Random-Movie/RandomMovieForm";
import movieSearchContext from "../Context/context-provider";
export default function HomePage({
  setGenres,
  genres,
  moviesInTheatre,
  activeMoviesSlider,
  setActiveMoviesSlider,
}) {
  const searchCtx = useContext(movieSearchContext);

  return (
    <PageTemplate>
      <div className="flex flex-col justify-center mt-16 w-full relative">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-slate-300 text-center  border-b w-4/5 text-xl font-bold">
            Popular Movies in Theatres
          </h2>
          <HomePageSlider
            movies={moviesInTheatre}
            slider={activeMoviesSlider}
            setSlider={setActiveMoviesSlider}
          />
        </div>
        {searchCtx.searchFound && <SearchResult />}
        <RandomMovieForm genres={genres} />
      </div>
    </PageTemplate>
  );
}
