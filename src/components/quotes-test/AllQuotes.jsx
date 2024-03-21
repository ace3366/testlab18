import { json, useLoaderData } from "react-router-dom";
import QuoteList from "../quotes/QuoteList";
export default function AllQuotes() {
  return <QuoteList></QuoteList>;
}

export async function loader() {
  const response = await fetch(
    "https://quotes-d8df2-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json"
  );
  return response;
  if (!response.ok) {
    throw json({ message: "Can not fetch data" }, { status: 500 });
  }
}
