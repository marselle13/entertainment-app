import Header from "./Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>
        <main> {props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
