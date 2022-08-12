import React from "react";

const Card = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
}) => {
  return (
    <>
      <div
        className="bg-dark-blue grow bw2 br3 pa2 ma3 white w-25 
 tc"
      >
        <p className="f3">{name}</p>
        <hr></hr>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Hair Color: {hair_color}</p>
        <p>Skin Color: {skin_color}</p>
        <p>Eye Color: {eye_color}</p>
        <p>Birth Year: {birth_year}</p>
        <p>Gender: {gender}</p>
      </div>
    </>
  );
};

export default Card;
