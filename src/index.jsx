// LIBs
import { createRoot } from "react-dom/client";

// ROUTER
import Router from "./core/Router";

// STYLESHEET
import "./core/StyleSheet/extends.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router />
);