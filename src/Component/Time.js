import React from "react";

function Time({ mis })
 {
if (mis>86400000){
  mis=0
}
  let s = mis / 1000;
  let hours = Math.floor(s / (60 * 60));
  let restm = Math.floor(s % (60 * 60));
  let minutes = Math.floor(restm / 60);
  let rests = Math.floor(restm % 60);
  

  return (
    <div>
      <div className="value">
        <span>{String(hours).padStart(2, "0")}:</span>

        <span>{String(minutes).padStart(2, "0")}:</span>

        <span>{String(rests).padStart(2, "0")}</span>
      </div>
      <div className="name">
        <p> Hour </p>
        <p> Minute </p>
        <p> Second </p>

      </div>
    </div>
  );
}
export default Time;
