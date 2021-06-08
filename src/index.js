import React from "react";
import ReactDom from "react-dom";

// const timeOfDay = 11;
var time = new Date();
// const currentHour = time.toLocaleString("en-US", {
//   hour: "numeric",
//   hour12: true
// });
const hour = time.getHours();
let color = {
  color: ""
};
function greeting() {
  if (hour >= 12) {
    greeting = "good afternoon!";
    color.color = "green";
  } else {
    if (hour <= 12) {
      greeting = "good evenning!";
      color.color = "blue";
    }
  }
  return greeting;
}

ReactDom.render(
  <h1 className="heading" style={color}>
    {greeting()} {hour}
  </h1>,
  document.getElementById("root")
);
