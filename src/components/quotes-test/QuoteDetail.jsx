import { useParams, useRouteLoaderData } from "react-router-dom";
export default function QuoteDetail() {
  const param = useParams();
  const data = useRouteLoaderData("quote-detail");
  const quoteData = Object.values(data);
  const detailData = quoteData.filter((quote) => quote.id === param.quoteId);
  return (
    <div>
      {" "}
      <h2>Author : {detailData[0].author}</h2>
      <p>{detailData[0].text}</p>
    </div>
  );
}
