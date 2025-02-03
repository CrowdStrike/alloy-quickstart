import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ConsoleExtension from "./components/ConsoleExtension";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConsoleExtension>
      <App />
    </ConsoleExtension>
  </React.StrictMode>
);
