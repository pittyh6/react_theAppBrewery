// import animals, { useAnimal } from "./data";

// const [cat, dog] = animals;
//Destructuring objects
//const { name, sound } = cat;

//Give name to destructuring objects
//const { name: catName, sound: catSound } = cat;

//Default value desctructuring objects(when do not have the value, use the default)
// const { name = "Fluffy", sound = "Purr" } = cat;

//nested objects
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;

// console.log(cat);

//destructing function
// const [animal, makeSound] = useAnimal(cat);
// console.log(makeSound);

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
const {
  model: hondaModel,
  coloursByPopularity: [hondaTopColour, silver],
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty },
} = honda;

const {
  model: teslaModel,
  coloursByPopularity: [teslaTopColour, red],
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty },
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
