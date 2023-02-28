import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div
      className={`App ${
        location.pathname === "/"
          ? "home"
          : location.pathname.replaceAll("/", " ")
      }`}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
