import { FoundryProvider } from "@crowdstrike/alloy-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FoundryProvider>
      <App />
    </FoundryProvider>
  </React.StrictMode>
);
