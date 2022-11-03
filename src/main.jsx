import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeProvider from "./context/ThemeContext";
import GithubRepos from "./GithubRepos";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <GithubRepos />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
