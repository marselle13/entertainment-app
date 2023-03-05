import classes from "./Card.module.css";
import bookmarkIcon from "../assets/icon-bookmark-empty.svg";
import movie from "../assets/icon-category-movie.svg";
import series from "../assets/icon-category-tv.svg";

const Card = (props) => {
  return (
    <div
      className={classes.background}
      style={{
        backgroundImage: `url(${props.background})`,
      }}
    >
      <div className={classes.description}>
        <ul>
          <li className={classes.dot}>{props.year}</li>
          <li>
            <div className={classes.type}>
              <span>
                {props.type === "Movie" ? (
                  <img src={movie} />
                ) : (
                  <img src={series} />
                )}
              </span>
              {props.type}
            </div>
          </li>
          <li>{props.rating}</li>
        </ul>
        <h4>{props.title}</h4>
      </div>
      <button>
        <img src={bookmarkIcon} alt="" />
      </button>
    </div>
  );
};

export default Card;
