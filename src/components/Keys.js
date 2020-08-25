import React from "react";

export default function Keys(props) {
  const { onArrowClicked } = props;
  return (
    <div className="arrows">
      <button onClick={() => onArrowClicked("up")}>Up</button>
      <button onClick={() => onArrowClicked("left")}>Left</button>
      <button onClick={() => onArrowClicked("down")}>Down</button>
      <button onClick={() => onArrowClicked("right")}>Right</button>
    </div>
  );
}
