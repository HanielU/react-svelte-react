import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TeaSet from "./Learn";
import SvelteComponent from "./SvelteApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  // {/* <App /> */}
  // {/* <TeaSet /> */}
  <SvelteComponent />
  // </React.StrictMode>
);
