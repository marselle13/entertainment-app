import Slide from "./Slide";
import Recommend from "./Recommend";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner";
import SearchBar from "../Layout/SearchBar";
import { entActions } from "../Store/ent-slice";
import { useState } from "react";
const Home = () => {
  const [searching, setSearching] = useState(false);
  const ent = useSelector((state) => state.ent.items);

  const dispatch = useDispatch();

  const homeSearch = (e) => {
    dispatch(entActions.search({ value: e.target.value, type: "ALL" }));
    if (e.target.value !== "") {
      setSearching(true);
    } else {
      setSearching(false);
    }
  };

  return (
    <>
      <SearchBar
        placeholder="Search for movies or TV series"
        onChange={(e) => homeSearch(e)}
      />
      {ent.length === 0 && <LoadingSpinner />}
      {ent.length !== 0 && !searching && <Slide />}
      {ent.length !== 0 && !searching && <Recommend />}
    </>
  );
};

export default Home;
