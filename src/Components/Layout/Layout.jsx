import Header from "./Header";
import classes from "./Layout.module.css";
import SearchBar from "./SearchBar";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Header />
      <SearchBar />
      <main> {props.children}</main>
    </div>
  );
};

export default Layout;
