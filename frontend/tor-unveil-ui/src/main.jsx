// main.jsx (Corrected version)
import React from "react";
import { createRoot } from "react-dom/client";
// Import BrowserRouter is no longer needed in this file
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Removed <BrowserRouter> wrapper */}
    <App />
  </React.StrictMode>
);
