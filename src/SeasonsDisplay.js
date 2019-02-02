import "./SeasonsDisplay.css";
import React from "react";

const SeasonsDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  console.log(season);
  console.log({ iconName });

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr its chilly....",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  //Use js ternary expression
  if (month > 2 && month > 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default SeasonsDisplay;
