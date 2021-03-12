import React from "react";
import "./Header.css";

function Header({ children }) {
  return (

    <div
      style={{ height: 200, clear: "both", textAlign: "center" }}
      className="jumbotron">
      {children}
    </div>

  );
}

export default Header;