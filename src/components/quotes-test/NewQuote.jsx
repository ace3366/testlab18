import { json, redirect } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";

export default function NewQuote() {
  return <QuoteForm></QuoteForm>;
}

export async function action({ request, params }) {
  const data = await request.formData();
  const quoteData = {
    author: data.get("author"),
    text: data.get("text"),
    id: `${data.get("author").replace(/\s+/g, "")}${Math.floor(
      Math.random() * 100
    )}`,
  };
  const response = await fetch(
    "https://quotes-d8df2-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
    {
      method: "POST",
      body: JSON.stringify(quoteData),
      header: { "Content-Type": "application/json" },
    }
  );
  // const response = await fetch(
  //   `https://movie-312bd-default-rtdb.asia-southeast1.firebasedatabase.app/movies/.json`,
  //   {
  //     method: "POST",
  //     body: JSON.stringify({ title, openingText, releaseDate }),
  //     header: { "Content-Type": "application/json" },
  //   }
  // );
  if (!response.ok) {
    throw json({ message: "Fail to send data" }, { status: 500 });
  }
  return redirect("/quotes");
}
