import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Kevin from "./App";
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <Kevin/>
  </React.StrictMode>
);
