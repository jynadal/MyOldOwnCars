import React from "react";

const marginDiv = {
  backgroundColor: "pink",
  width: "400px",
  margin: "20px auto"
};
const marginP = {
  padding: "10px"
};

const Car = ({ children, color }) => {
  const colorInfo = color ? (
    <p style={marginP}>Couleur: {color}</p>
  ) : (
    <p style={marginP}>Couleur: Blanche ou grise métalisé</p>
  );

  if (children) {
    return (
      <div style={marginDiv}>
        <p style={marginP}>Marque: {children}</p>
        {colorInfo}
      </div>
    );
  } else {
    return <p> </p>;
  }
};
export default Car;
