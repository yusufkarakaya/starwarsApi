import React from "react";
import Card from "./Card";

const CardList = ({ people }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {people.map((person, index) => {
          return (
            <Card
              name={person.name}
              height={person.height}
              mass={person.mass}
              hair_color={person.hair_color}
              skin_color={person.skin_color}
              eye_color={person.eye_color}
              birth_year={person.birth_year}
              gender={person.gender}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
