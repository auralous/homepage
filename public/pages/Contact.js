import { useHead } from "hoofd/preact";
import Header from "../components/Header.js";
import ContactContent from "../content/contact.md";

const Contact = () => {
  useHead({
    title: "Contact | Auralous",
    metas: [
      {
        name: "description",
        content:
          "Submit bug reports, provide suggestions, ideas, or feedback on your experience with the app",
      },
    ],
  });
  return (
    <div class="container content">
      <Header />
      <ContactContent />
    </div>
  );
};

export default Contact;
