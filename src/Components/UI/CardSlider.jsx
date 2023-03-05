import classes from "./CardSlider.module.css";
import bookmarkIcon from "../assets/icon-bookmark-empty.svg";
import CardInfo from "./CardInfo";
import PlayButton from "./PlayButton";

const CardSlider = (props) => {
  return (
    <div
      className={classes.background}
      style={{
        backgroundImage: `url(${props.background})`,
      }}
    >
      <CardInfo
        type={props.type}
        year={props.year}
        title={props.title}
        rating={props.rating}
      />
      <div className={classes.playDiv}>
        <PlayButton />
      </div>

      <button className={classes.bookmark}>
        <img src={bookmarkIcon} alt="" />
      </button>
    </div>
  );
};

export default CardSlider;
