import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { entActions } from "../Store/ent-slice";
import Card from "../UI/Card";
import Grid from "../UI/Grid";
import classes from "./Movies.module.css";

const Movies = () => {
  const ent = useSelector((state) => state.ent.items);
  const movies = useSelector((state) => state.ent.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(entActions.filterMovies("movies"));
  }, [ent, dispatch]);

  const bookmarkHandler = (title) => {
    dispatch(entActions.toggle(title));
  };

  return (
    <div className={classes.movies}>
      <h3 className={classes.label}>Movies</h3>
      <Grid>
        {movies.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              background={item.thumbnail.regular.large}
              rating={item.rating}
              isBookmark={item.isBookmarked}
              type={item.category}
              year={item.year}
              onClick={() => bookmarkHandler(item.title)}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Movies;
