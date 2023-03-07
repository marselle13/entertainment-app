import { useSelector } from "react-redux";

import Card from "../UI/Card";
import Grid from "../UI/Grid";
import classes from "./Searching.module.css";

const Searching = (props) => {
  const searching = useSelector((state) => state.ent.search);

  return (
    <div className={classes.searching}>
      <h3 className={classes.label}>
        Found {searching.length} results for '{props.search}'
      </h3>
      <Grid>
        {searching.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              background={item.thumbnail.regular.large}
              type={item.category}
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

export default Searching;
