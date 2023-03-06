import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../Layout/SearchBar";
import { entActions } from "../Store/ent-slice";
import Card from "../UI/Card";
import Grid from "../UI/Grid";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Bookmarks.module.css";

const Bookmark = () => {
  const ent = useSelector((state) => state.ent.items);

  const dispatch = useDispatch();

  const bookmarkHandler = (title) => {
    dispatch(entActions.toggle(title));
  };

  return (
    <>
      <SearchBar placeholder="Search for bookmarked shows" />

      <div className={classes.bookmark}>
        {ent.length === 0 && <LoadingSpinner />}
        {ent.length !== 0 && (
          <>
            <div>
              <h3 className={classes.label}>Bookmarked Movies</h3>

              <Grid>
                {ent.map((item, index) => {
                  if (item.category === "Movie" && item.isBookmarked) {
                    return (
                      <Card
                        key={index}
                        title={item.title}
                        type={item.category}
                        background={item.thumbnail.regular.large}
                        year={item.year}
                        isBookmark={item.isBookmarked}
                        rating={item.rating}
                        onClick={() => bookmarkHandler(item.title)}
                      />
                    );
                  }
                  return true;
                })}
              </Grid>
            </div>
            <div>
              <h3 className={classes.label}>Bookmarked Series</h3>
              <Grid>
                {ent.map((item, index) => {
                  if (item.category === "TV Series" && item.isBookmarked) {
                    return (
                      <Card
                        key={index}
                        title={item.title}
                        type={item.category}
                        background={item.thumbnail.regular.large}
                        year={item.year}
                        isBookmark={item.isBookmarked}
                        rating={item.rating}
                        onClick={() => bookmarkHandler(item.title)}
                      />
                    );
                  }
                  return true;
                })}
              </Grid>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Bookmark;
