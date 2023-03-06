import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { entActions } from "../Store/ent-slice";
import Card from "../UI/Card";
import Grid from "../UI/Grid";
import classes from "./Series.module.css";

const Series = () => {
  const ent = useSelector((state) => state.ent.items);
  const series = useSelector((state) => state.ent.series);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(entActions.filterSeries());
  }, [ent, dispatch]);

  console.log(series);

  return (
    <div className={classes.series}>
      <h3 className={classes.label}>Series</h3>
      <Grid>
        {series.map((item, index) => {
          console.log(item);

          return (
            <Card
              key={index}
              type={item.category}
              title={item.title}
              background={item.thumbnail.regular.large}
              year={item.year}
              rating={item.rating}
              isBookmark={item.isBookmarked}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Series;
