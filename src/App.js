import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AllQuotes, {
  loader as quoteLoader,
} from "./components/quotes-test/AllQuotes.jsx";
import NewQuote, {
  action as createQuote,
} from "./components/quotes-test/NewQuote.jsx";
import QuoteDetail from "./components/quotes-test/QuoteDetail.jsx";
import Layout from "./components/layout/Layout.jsx";
import NoQuotesFound from "./components/quotes/NoQuotesFound.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/quotes" />,
    errorElement: <NoQuotesFound />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoQuotesFound />,
    children: [
      {
        path: "quotes",
        loader: quoteLoader,
        id: "quote-detail",
        children: [
          { index: true, element: <AllQuotes /> },
          { path: ":quoteId", element: <QuoteDetail /> },
        ],
      },

      { path: "new-quote", element: <NewQuote />, action: createQuote },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
