import classes from "./QuoteList.module.css";
import {
  useRouteLoaderData,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import QuoteItem from "./QuoteItem";
export default function QuoteList() {
  let ordinal = 1;

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const data = useRouteLoaderData("quote-detail");
  const allQuote = data ? Object.values(data) : null;

  const sort = searchParams.get("sort");
  if (allQuote) {
    ordinal = sort === "asc" || sort === "" ? 1 : allQuote.length;
    sort === "asc" || sort === "" || allQuote.reverse();
  }

  return (
    <>
      <div className={classes.sorting}>
        {" "}
        <button
          onClick={() => {
            sort === "asc"
              ? setSearchParams({ sort: "desc" })
              : setSearchParams({ sort: "asc" });
          }}
        >
          Sort {sort === "asc" ? "Descending" : "Ascending"}
        </button>
      </div>
      {allQuote && (
        <ul className={classes.list}>
          {allQuote.map((quote) => (
            <QuoteItem
              ordinal={sort === "asc" || sort === "" ? ordinal++ : ordinal--}
              quoteData={quote}
              key={quote.id}
            ></QuoteItem>
          ))}
        </ul>
      )}
    </>
  );
}
