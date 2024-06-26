import React from "react";
import "./Buttons.css";

function Buttons({ title }) {
  return (
    <div className="button">
      <a>{title}</a>
    </div>
  );
}

export default Buttons;
