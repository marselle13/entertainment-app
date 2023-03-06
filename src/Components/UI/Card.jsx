import classes from "./Card.module.css";
import bookmarkIcon from "../assets/icon-bookmark-empty.svg";
import bookmarkedIcon from "../assets/icon-bookmark-full.svg";
import CardInfo from "./CardInfo";
import PlayButton from "./PlayButton";

const Card = (props) => {
  return (
    <div className={classes.normalCard}>
      <div className={classes.cardImage}>
        <div className={classes.playDiv}>
          <PlayButton />
        </div>
        <img src={props.background} alt="" />
        <button className={classes.bookmark} onClick={props.onClick}>
          <img
            src={props.isBookmark ? bookmarkedIcon : bookmarkIcon}
            className={classes.icon}
            alt=""
          />
        </button>
      </div>
      <CardInfo
        info="desciption"
        type={props.type}
        year={props.year}
        title={props.title}
        rating={props.rating}
      />
    </div>
  );
};

export default Card;
