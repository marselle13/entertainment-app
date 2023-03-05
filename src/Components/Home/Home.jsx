import Slide from "./Slide";
import classes from "./Home.module.css";
import Recommend from "./Recommend";

const Home = () => {
  return (
    <>
      <div className={classes.slider}>
        <h3 className={classes.label}>Trending</h3>
        <Slide />
      </div>
      <div className={classes.recommend}>
        <h3 className={classes.label}>Recommended for you</h3>
        <Recommend />
      </div>
    </>
  );
};

export default Home;
