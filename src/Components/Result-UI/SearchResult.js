import classes from "./SearchResult.module.css";
import ReactDOM from "react-dom";
import React from "react";
import MovieResult from "./MovieResult";
import TVResult from "./TVResult";
import PersonResult from "./PersonResult";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.mediaType === "movie" && (
        <MovieResult searchResult={props.searchResult} />
      )}
      {props.mediaType === "tv" && (
        <TVResult searchResult={props.searchResult} />
      )}
      {props.mediaType === "person" && (
        <PersonResult searchResult={props.searchResult} />
      )}
    </React.Fragment>
  );
};

export default function SearchResult(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Modal searchResult={props.searchResult} mediaType={props.mediaType} />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
}
