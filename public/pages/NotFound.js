import { useHead } from "hoofd/preact";
import Header from "../components/Header.js";

const NotFound = () => {
  useHead({
    title: "Page Not Found | Auralous",
    metas: [
      {
        name: "description",
        content: "",
      },
    ],
  });

  return (
    <div class="container">
      <Header />
      <h2>Sorry, we couldn't find the page you were looking for.</h2>
    </div>
  );
};

export default NotFound;
