import searchIcon from "../assets/search-icon.svg";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const preventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={preventHandler}>
      <div className={classes.searchBar}>
        <img src={searchIcon} alt="" />
        <div className={classes.searchInput}>
          <input
            type="text"
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
          <div className={classes.border}></div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
