// project-react/project-event/src/Event.js
import React from "react";

function Football() {
  const shoot = (a, b) => {
    alert(b.type);
  };
  return (
    <button onClick={(event) => shoot("Goal!", event)}>Goallllllllll!</button>
  );
}

export default Football;
