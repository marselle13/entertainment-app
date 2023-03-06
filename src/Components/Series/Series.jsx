import { useDispatch, useSelector } from "react-redux";
import { entActions } from "../Store/ent-slice";
import Card from "../UI/Card";
import Grid from "../UI/Grid";
import classes from "./Series.module.css";

const Series = () => {
  const ent = useSelector((state) => state.ent.items);
  const dispatch = useDispatch();

  const bookmarkHandler = (title) => {
    dispatch(entActions.toggle(title));
  };

  return (
    <div className={classes.series}>
      <h3 className={classes.label}>Series</h3>
      <Grid>
        {ent.map((item, index) => {
          if (item.category === "TV Series") {
            return (
              <Card
                key={index}
                type={item.category}
                title={item.title}
                background={item.thumbnail.regular.large}
                year={item.year}
                rating={item.rating}
                isBookmark={item.isBookmarked}
                onClick={() => bookmarkHandler(item.title)}
              />
            );
          }
          return true;
        })}
      </Grid>
    </div>
  );
};

export default Series;