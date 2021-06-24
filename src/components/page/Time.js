import React from "react";

function Time(timeStatus) {
  console.log(timeStatus.timeStatus);
  return (
    <div className={`timer ${timeStatus.timeStatus ? "active-timer" : ""}`}>
      <h2>- Timer -</h2>
      <div className="timer-content">
        <audio src="./music/Imagine_Dragons_Bad Liar.mp3" />
      </div>
    </div>
  );
}

export default Time;