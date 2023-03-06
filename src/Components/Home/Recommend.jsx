import { useDispatch, useSelector } from "react-redux";
import { entActions } from "../Store/ent-slice";
import Card from "../UI/Card";
import Grid from "../UI/Grid";

const Recommend = () => {
  const ent = useSelector((state) => state.ent.items);
  const dispatch = useDispatch();

  const bookmarkHandler = (title) => {
    dispatch(entActions.toggle(title));
  };

  return (
    <Grid>
      {ent.map((item, index) => {
        if (!item.isTrending) {
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
        }
        return true;
      })}
    </Grid>
  );
};

export default Recommend;
