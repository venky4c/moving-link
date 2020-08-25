import React, { useState, useEffect } from "react";

export default function useMovement() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState("down");

  // add event listener to window, to listen for key strokes
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    //fn to respond to the 'up, down, left, right' arrow key strokes
    //we could have used the e.keyCode, which gives a number. But this approachis is more readable
    function handleKeyDown(e) {
      if (e.key === "ArrowUp") move("up");
      if (e.key === "ArrowLeft") move("left");
      if (e.key === "ArrowDown") move("down");
      if (e.key === "ArrowRight") move("right");
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function move(dir) {
    setDirection(dir);
    if (dir === "up") setY((y) => y - 20);
    if (dir === "left") setX((x) => x - 20);
    if (dir === "down") setY((y) => y + 20);
    if (dir === "right") setX((x) => x + 20);
  }

  return { x, y, direction, move };
}
