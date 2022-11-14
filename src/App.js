import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import { GetMovieSearch } from "./Components/API_Calls/GetMovieSearch";
import "./App.css";
import { useState } from "react";
function App() {
  const [movieSearch, setMovieSearch] = useState();
  const [searchFound, setSearchFound] = useState(false);
  const [mediaType, setMediaType] = useState("");

  const searchHandler = (userInput) => {
    GetMovieSearch(userInput)
      .then((movie) => {
        setMovieSearch(movie);
        setMediaType(movie.media_type);
      })
      .then(() => {
        setSearchFound(true);
      });
  };
  console.log(movieSearch);
  console.log(mediaType);
  return (
    <div className="App">
      <Header onSearch={searchHandler} />
      <HomePage
        searchResult={movieSearch}
        searchFound={searchFound}
        setSearchFound={setSearchFound}
        mediaType={mediaType}
      />
    </div>
  );
}

export default App;
//import ReactDom from react-dom
// {ReactDOM.createPortal(<Insert Component>, document.getElementById("insert element name in index.html"))
