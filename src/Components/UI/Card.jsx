import classes from "./Card.module.css";
import bookmarkIcon from "../assets/icon-bookmark-empty.svg";
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
        <button className={classes.bookmark}>
          <img src={bookmarkIcon} className={classes.icon} alt="" />
        </button>
      </div>
      <CardInfo
        type={props.type}
        year={props.year}
        title={props.title}
        rating={props.rating}
      />
    </div>
  );
};

export default Card;
