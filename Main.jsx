import React from "react";
import "./Main.css";

const Main = ({ extended }) => {
  return (
    <div
      className="main"
      style={{ marginLeft: extended ? "250px" : "80px" }}
    >
      <p>Hello</p>
    </div>
  );
};

export default Main;
