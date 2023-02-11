import HomePage from "./Components/Home Page/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { MovieContext } from "./Components/Context/context-provider";
import { ActivePageContext } from "./Components/Context/page-context";
import { useState, useEffect } from "react";
import { GetHomePage } from "./Components/API_Calls/GetHomePage";
import SignUp from "./pages/SignUp";
import Films from "./pages/Films";
function App() {
  const [genres, setGenres] = useState([]);
  const [moviesInTheatre, setMoviesInTheatre] = useState([]);
  const [activeMoviesSlider, setActiveMoviesSlider] = useState([]);

  useEffect(() => {
    GetHomePage().then(([genres, movies]) => {
      setMoviesInTheatre(movies);
      setActiveMoviesSlider([movies[0], movies[1], movies[2], movies[3]]);
      setGenres(genres);
    });
  }, []);

  return (
    <ActivePageContext>
      <MovieContext>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                genres={genres}
                moviesInTheatre={moviesInTheatre}
                activeMoviesSlider={activeMoviesSlider}
                setActiveMoviesSlider={setActiveMoviesSlider}
              />
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/new-acc" element={<SignUp />} />
          <Route path="/films" element={<Films genres={genres} />} />
        </Routes>
      </MovieContext>
    </ActivePageContext>
  );
}
export default App;
