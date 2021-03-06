import { toStatic, useHead } from "hoofd/preact";
import {
  ErrorBoundary,
  hydrate,
  lazy,
  LocationProvider,
  prerender as ssr,
  Route,
  Router,
} from "preact-iso";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

const Privacy = lazy(() => import("./pages/Privacy.js"));
const Contact = lazy(() => import("./pages/Contact.js"));

export function App() {
  useHead({
    title: "Auralous",
    language: "en",
    metas: [
      {
        name: "description",
        content: "Play & listen to music in sync with friends.",
      },
    ],
  });
  return (
    <LocationProvider>
      <main>
        <ErrorBoundary>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/contact" component={Contact} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
        <Footer />
      </main>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  const result = await ssr(<App {...data} />);
  const head = toStatic();
  const elements = new Set([
    ...head.links.map((props) => ({ type: "link", props })),
    ...head.metas.map((props) => ({ type: "meta", props })),
    ...head.scripts.map((props) => ({ type: "script", props })),
  ]);
  return {
    ...result,
    head: {
      lang: head.lang,
      title: head.title,
      elements,
    },
  };
}
