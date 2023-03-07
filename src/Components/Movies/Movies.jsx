import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../Layout/SearchBar";
import Searching from "../Layout/Searching";
import { entActions } from "../Store/ent-slice";
import Card from "../UI/Card";
import Grid from "../UI/Grid";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Movies.module.css";

const Movies = () => {
  const ent = useSelector((state) => state.ent.items);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const bookmarkHandler = (title) => {
    dispatch(entActions.toggle(title));
  };
  const MovieSearch = (e) => {
    dispatch(entActions.search({ value: e.target.value, type: "Movie" }));
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <SearchBar placeholder="Search for movies" onChange={MovieSearch} />
      {searchTerm && <Searching search={searchTerm} />}
      <div className={classes.movies}>
        {ent.length === 0 && <LoadingSpinner />}
        {ent.length !== 0 && !searchTerm && (
          <>
            <h3 className={classes.label}>Movies</h3>
            <Grid>
              {ent.map((item, index) => {
                if (item.category === "Movie") {
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
                }
                return true;
              })}
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default Movies;
