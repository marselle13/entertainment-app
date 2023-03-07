import Slide from "./Slide";
import Recommend from "./Recommend";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner";
import SearchBar from "../Layout/SearchBar";
import { entActions } from "../Store/ent-slice";
import { useState } from "react";
import Searching from "../Layout/Searching";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const ent = useSelector((state) => state.ent.items);

  const dispatch = useDispatch();

  const homeSearch = (e) => {
    e.preventDefault();
    dispatch(entActions.search({ value: e.target.value, type: "ALL" }));
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <SearchBar
        placeholder="Search for movies or TV series"
        onChange={(e) => homeSearch(e)}
      />
      {searchTerm && <Searching search={searchTerm} />}
      {ent.length === 0 && <LoadingSpinner />}
      {ent.length !== 0 && !searchTerm && <Slide />}
      {ent.length !== 0 && !searchTerm && <Recommend />}
    </>
  );
};

export default Home;
