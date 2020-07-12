import React from "react";

const Progress = ({ width, index }) => {
  let color = "progress-bar progress-bar-striped progress-bar-animated ";
  switch (index) {
    case 1:
      color += " bg-success";
      break;
    case 2:
      color += " bg-info";
      break;
    case 3:
      color += " bg-warning";
      break;
    case 4:
      color += " bg-danger";
      break;
    case 5:
      color += " bg-success";
      break;
    case 6:
      color += " bg-info";
      break;
  }
  return (
    <div className="progress mb-2">
      <div
        className={color}
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};
export default Progress;
