import React from "react";
import ReactDOM from "react-dom/client";

// ATTENTION : ton App.jsx est dans /source/src
import App from "../../source/src/App.jsx";
// et ton index.css est dans /source
import "../../source/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
