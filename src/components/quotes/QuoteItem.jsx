import { useNavigate } from "react-router-dom";
import classes from "./QuoteItem.module.css";
export default function QuoteItem({ quoteData, ordinal }) {
  const navigate = useNavigate();
  return (
    <li className={classes.item}>
      <div>
        <blockquote>{quoteData.text}</blockquote>
        <figcaption>Quote {ordinal}</figcaption>
      </div>
      <button
        onClick={() => {
          navigate(`${quoteData.id}`);
        }}
        className="btn"
      >
        {" "}
        View fullscreen
      </button>
    </li>
  );
}
