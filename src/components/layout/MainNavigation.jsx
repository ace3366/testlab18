import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Greate Quotes</div>
      <div className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/quotes"
            >
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add a quotes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
