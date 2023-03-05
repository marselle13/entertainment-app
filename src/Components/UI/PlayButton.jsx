import play from "../assets/play.svg";
import classes from "./PlayButton.module.css";

const PlayButton = () => {
  return (
    <button className={classes.play}>
      <div className={classes.playLabel}>
        <img src={play} alt="" />
        <h5>Play</h5>
      </div>
    </button>
  );
};

export default PlayButton;
