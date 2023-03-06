import Slide from "./Slide";
import classes from "./Home.module.css";
import Recommend from "./Recommend";

import { useSelector } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner";

const Home = () => {
  const loading = useSelector((state) => state.ent.isLoading);
  const ent = useSelector((state) => state.ent.items);
  return (
    <>
      {loading && ent.length === 0 && (
        <div className={classes.spinner}>
          <LoadingSpinner />
        </div>
      )}
      {!loading && ent.length !== 0 && (
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
      )}
    </>
  );
};

export default Home;
