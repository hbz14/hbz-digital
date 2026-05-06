import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import App from "./App.tsx";
import "./index.css";

posthog.init("phc_qLHFf7xDWPPSgYhJWnmvn2BLj5f49kaASzhLwQxBRM9S", {
  api_host: "https://us.i.posthog.com",
  autocapture: true,
  capture_pageview: true,
});

createRoot(document.getElementById("root")!).render(<App />);
