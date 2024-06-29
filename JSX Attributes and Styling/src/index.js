import React from "react";
import ReactDOM from "react-dom";

const images = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="food-img " src="https://nowinrio.com/wp-content/uploads/2023/05/Brazil-Food-Pastel.jpg" alt="image of Pastel" />
      <img className="food-img " src="https://www.tastingtable.com/img/gallery/12-dishes-you-need-to-try-at-a-brazilian-steakhouse/intro-1700586867.jpg" alt="image of Brazilian Food" />
      <img className="food-img " src="https://i.pinimg.com/736x/e5/ea/62/e5ea629840444f36dc389e3c1e422813.jpg" alt="image of Coxinha" />
      <br />
      <img src={images + "?grayscale"} alt="image of random grayscale" />
    </div>
  </div >,
  document.getElementById("root")
);
