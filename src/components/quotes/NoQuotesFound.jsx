import classes from "./NoQuotesFound.module.css";
import MainNavigation from "../layout/MainNavigation";
export default function NoQuotesFound() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <div className={classes.noquotes}>Page not found</div>
    </>
  );
}
