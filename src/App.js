import React, { useEffect, useRef } from "react";
import "./App.css";
import useMovement from "./components/useMovement.js";
import Keys from "./components/Keys";
export default function App() {
  const canvasRef = useRef(null);
  const linkDownRef = useRef(null);
  const linkRightRef = useRef(null);
  const linkUpRef = useRef(null);
  const linkLeftRef = useRef(null);
  const { x, y, direction, move } = useMovement();

  //Equivqalent to componentDidMount: We want to set the canvas width and height to that of the browser only on, page load
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  //Equivqalent to componentDidMount: We want to be able to move the box whenever the user presses the four arrow buttons
  // in other words, whenever x,y or both positions change.
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let theLinkRef;
    if (direction === "down") theLinkRef = linkDownRef;
    if (direction === "up") theLinkRef = linkUpRef;
    if (direction === "left") theLinkRef = linkLeftRef;
    if (direction === "right") theLinkRef = linkRightRef;
    context.drawImage(theLinkRef.current, x, y);
  }, [x, y]); //render when one or both of x,y change

  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <Keys onArrowClicked={(direction) => move(direction)} />

      <div className="images">
        <img
          ref={linkDownRef}
          src="https://i.imgur.com/JYUB0m3.png"
          alt="Down"
        />
        <img
          ref={linkRightRef}
          src="https://i.imgur.com/GEXD7bk.gif"
          alt="Right"
        />
        <img ref={linkUpRef} src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img
          ref={linkLeftRef}
          src="https://i.imgur.com/4LGAZ8t.gif"
          alt="Left"
        />
      </div>
    </div>
  );
}
