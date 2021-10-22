import { useHead } from "hoofd/preact";
import Header from "../components/Header.js";
import PrivacyContent from "../content/privacy.md";

const Privacy = () => {
  useHead({
    title: "Privacy | Auralous",
    metas: [
      {
        name: "description",
        content: "Auralous Privacy Policy",
      },
    ],
  });
  return (
    <div class="container content">
      <Header />
      <PrivacyContent />
    </div>
  );
};

export default Privacy;
