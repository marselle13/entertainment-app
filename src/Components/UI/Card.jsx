import classes from "./Card.module.css";
import bookmarkIcon from "../assets/icon-bookmark-empty.svg";

const Card = (props) => {
  return (
    <div
      className={classes.background}
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className={classes.description}>
        <ul>
          <li className={classes.dot}>2019</li>
          <li>Movie</li>
          <li>PG</li>
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
