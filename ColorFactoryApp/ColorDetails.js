import React from "react";
import { useParams, Redirect } from "react-router-dom";

function ColorDetails({ colors }) {
  const { color } = useParams();
  const colorObj = colors.find(c => c.name.toLowerCase() === color.toLowerCase());

  if (!colorObj) {
    return <Redirect to="/colors" />;
  }

  return (
    <div>
      <h1>{colorObj.name}</h1>
      <div style={{ backgroundColor: colorObj.value, width: "100px", height: "100px" }}></div>
      <p>{colorObj.value}</p>
    </div>
  );
}

export default ColorDetails;
