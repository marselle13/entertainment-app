import searchIcon from "../assets/search-icon.svg";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form>
      <div className={classes.searchBar}>
        <img src={searchIcon} alt="" />
        <div className={classes.searchInput}>
          <input type="text" placeholder="Search for movies or TV series" />
          <div className={classes.border}></div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;