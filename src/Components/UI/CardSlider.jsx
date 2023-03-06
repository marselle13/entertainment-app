import classes from "./CardSlider.module.css";
import bookmarkIcon from "../assets/icon-bookmark-empty.svg";
import bookmarkedIcon from "../assets/icon-bookmark-full.svg";
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
        info="slider"
        type={props.type}
        year={props.year}
        title={props.title}
        rating={props.rating}
      />
      <div className={classes.playDiv}>
        <PlayButton />
      </div>

      <button className={classes.bookmark} onClick={props.onClick}>
        <img src={props.isBookmark ? bookmarkedIcon : bookmarkIcon} alt="" />
      </button>
    </div>
  );
};

export default CardSlider;
