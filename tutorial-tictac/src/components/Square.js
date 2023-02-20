import { useState } from "react";

export default function Square({value, onSquareClick}) {

  return (
    <div>
        <button onClick={onSquareClick} className="square">{value}</button>
    </div>
  )
}