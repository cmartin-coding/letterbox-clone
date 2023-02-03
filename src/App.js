import HomePage from "./Components/Home Page/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import { MovieContext } from "./Components/Context/context-provider";
function App() {
  return (
    <MovieContext>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-in" element={<Test />} />
      </Routes>

      {/* <Header onSearch={searchHandler} />
      <HomePage
        searchResult={movieSearch}
        searchFound={searchFound}
        setSearchFound={setSearchFound}
        mediaType={mediaType}
        onRetrieveGenres={genresHandler}
        onSearch={showMovieSliderHandler}
        genres={genres}
        onShowRandomMovie={showRandomMovieHandler}
      /> */}
    </MovieContext>
  );
}
export default App;
