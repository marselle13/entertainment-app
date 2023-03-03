import Slide from "./Slide";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.slider}>
      <h3 className={classes.label}>Trending</h3>
      <Slide />
    </div>
  );
};

export default Home;
