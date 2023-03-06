import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { entActions } from "../Store/ent-slice";
import Card from "../UI/Card";
import Grid from "../UI/Grid";

const Recommend = () => {
  const ent = useSelector((state) => state.ent.items);
  const rec = useSelector((state) => state.ent.recommened);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(entActions.filterRec());
  }, [ent, dispatch]);

  const bookmarkHandler = (title) => {
    dispatch(entActions.toggle(title));
  };

  return (
    <Grid>
      {rec.map((item, index) => {
        return (
          <Card
            key={index}
            type={item.category}
            title={item.title}
            year={item.year}
            rating={item.rating}
            background={item.thumbnail.regular.large}
            isBookmark={item.isBookmarked}
            onClick={() => bookmarkHandler(item.title)}
          />
        );
      })}
    </Grid>
  );
};

export default Recommend;
