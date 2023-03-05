import classes from "./CardSlider.module.css";
import bookmarkIcon from "../assets/icon-bookmark-empty.svg";
import movie from "../assets/icon-category-movie.svg";
import series from "../assets/icon-category-tv.svg";
import play from "../assets/play.svg";

const CardSlider = (props) => {
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
                  <img src={movie} alt="movie" />
                ) : (
                  <img src={series} alt="serie" />
                )}
              </span>
              {props.type}
            </div>
          </li>
          <li>{props.rating}</li>
        </ul>
        <h4>{props.title}</h4>
      </div>
      <div className={classes.playDiv}>
        <button className={classes.play}>
          <div className={classes.playLabel}>
            <img src={play} alt="" />
            <h5>Play</h5>
          </div>
        </button>
      </div>
      <button className={classes.bookmark}>
        <img src={bookmarkIcon} alt="" />
      </button>
    </div>
  );
};

export default CardSlider;
