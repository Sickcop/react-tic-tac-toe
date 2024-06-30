import React from "react";
import '../styles/square.style.css'

function Square({ index, children, updateTurn }) {
  return (
    <div className="square" onClick={updateTurn}>{children}</div>
  )
}

export default Square