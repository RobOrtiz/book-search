import React from "react";
import "./Delete.css";

function Delete(props) {
  return (
    <button className="btn" onClick={() => props.deleteBook(props)}>Delete Book</button>
  );
}
export default Delete;