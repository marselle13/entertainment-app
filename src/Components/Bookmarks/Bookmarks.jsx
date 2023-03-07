import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../Layout/SearchBar";
import Searching from "../Layout/Searching";
import { entActions } from "../Store/ent-slice";
import Card from "../UI/Card";
import Grid from "../UI/Grid";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Bookmarks.module.css";

const Bookmark = () => {
  const ent = useSelector((state) => state.ent.items);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const bookmarkHandler = (title) => {
    dispatch(entActions.toggle(title));
  };

  const bookmarkSearch = (e) => {
    dispatch(entActions.search({ value: e.target.value, type: "BOOKMARK" }));
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <SearchBar
        placeholder="Search for bookmarked shows"
        onChange={bookmarkSearch}
      />
      {searchTerm && <Searching search={searchTerm} />}

      <div className={classes.bookmark}>
        {ent.length === 0 && <LoadingSpinner />}
        {ent.length !== 0 && !searchTerm && (
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
