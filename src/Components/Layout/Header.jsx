import classes from "./Header.module.css";
import mainIcon from "../assets/navigation/main-icon.svg";
import { ReactComponent as HomeLogo } from "../assets/navigation/home-icon.svg";
import { ReactComponent as MoviesLogo } from "../assets/navigation/movies-icon.svg";
import { ReactComponent as SeriesLogo } from "../assets/navigation/series-icon.svg";
import { ReactComponent as BookmarksLogo } from "../assets/navigation/bookmark-icon.svg";
import profileIcon from "../assets/navigation/profile.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? true : false;
  };

  return (
    <header className={classes.header}>
      <div className={classes.mobile}>
        <img src={mainIcon} alt="main" />
      </div>
      <div className={classes.navigation}>
        <div className={classes.desktop}>
          <img src={mainIcon} alt="main" />
        </div>
        <nav>
          <ul>
            <NavLink to="/home">
              <li>
                <HomeLogo
                  style={{ fill: isActive("/home") ? "white" : "#5A698F" }}
                />
              </li>
            </NavLink>
            <NavLink to="/movies">
              <li>
                <MoviesLogo
                  style={{ fill: isActive("/movies") ? "white" : "#5A698F" }}
                />
              </li>
            </NavLink>

            <NavLink to="/series">
              <li>
                <SeriesLogo
                  style={{ fill: isActive("/series") ? "white" : "#5A698F" }}
                />
              </li>
            </NavLink>

            <NavLink to="/bookmarks">
              <li>
                <BookmarksLogo
                  style={{ fill: isActive("/bookmarks") ? "white" : "#5A698F" }}
                />
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <div>
        <img src={profileIcon} alt="" />
      </div>
    </header>
  );
};

export default Header;
