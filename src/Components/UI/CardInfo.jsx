import movie from "../assets/icon-category-movie.svg";
import series from "../assets/icon-category-tv.svg";
import classes from "./CardInfo.module.css";

const CardInfo = (props) => {
  return (
    <div
      className={
        props.info === "slider"
          ? classes.descriptionSlider
          : classes.description
      }
    >
      <ul>
        <li className={classes.dot}>{props.year}</li>
        <li>
          <div className={classes.type}>
            <span>
              <img src={props.type === "Movie" ? movie : series} alt="movie" />
            </span>
            {props.type}
          </div>
        </li>
        <li>{props.rating}</li>
      </ul>
      <h4>{props.title}</h4>
    </div>
  );
};

export default CardInfo;
