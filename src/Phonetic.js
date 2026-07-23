import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <button type="button">Listen</button>
      <span className="text">{props.phonetic}</span>
    </div>
  );
}
