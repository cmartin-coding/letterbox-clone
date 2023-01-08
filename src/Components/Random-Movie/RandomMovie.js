import RandomMovieForm from "./RandomMovieForm";
export default function RandomMovie(props) {
  const userSelectionHandler = (genre) => {
    props.onShowRandomMovie(genre);
  };
  return (
    <div>
      <RandomMovieForm
        genres={props.genres}
        onRetrieveUserSelection={userSelectionHandler}
      />
    </div>
  );
}

//
