import classes from "./ResultCard.module.css";

export default function ResultCard(props) {
  return (
    <div className={classes.mainContainer}>
      <div className={`${classes.searchContainer} ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
}
