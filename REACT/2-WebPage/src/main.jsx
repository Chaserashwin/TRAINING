import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ThemeContextProvider } from "./store/Themecontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// <ThemeContextProvider>
//   <App />
// </ThemeContextProvider>
