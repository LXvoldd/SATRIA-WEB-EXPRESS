import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Login.jsx";

function Root() {
  const [loggedIn, setLoggedIn] = useState(
    () => localStorage.getItem("loggedIn") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setLoggedIn(true);
  };

  return loggedIn ? (
    <App />
  ) : (
    <Login onLoginSuccess={handleLogin} />
  );
}


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
