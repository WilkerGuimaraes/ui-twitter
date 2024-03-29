import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";

import { Globalstyle } from "./main.style.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>
);
