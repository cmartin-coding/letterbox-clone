import ReactDOM from "react-dom";
import React, { useContext } from "react";
import MovieResult from "./MovieResult";
import TVResult from "./TVResult";
import PersonResult from "./PersonResult";
import movieSearchContext from "../Context/context-provider";
const Backdrop = () => {
  const { closeModal } = useContext(movieSearchContext);
  return (
    <div
      className="fixed top-0 left-0 w-screen h-full min-h-screen  bg-gray-500/50 z-10 bg-scroll"
      onClick={closeModal}
    />
  );
};

const Modal = () => {
  const { mediaType } = useContext(movieSearchContext);
  return (
    <React.Fragment>
      {mediaType === "movie" && <MovieResult />}
      {mediaType === "tv" && <TVResult />}
      {mediaType === "person" && <PersonResult />}
    </React.Fragment>
  );
};

export default function SearchResult() {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal"))}
    </React.Fragment>
  );
}
