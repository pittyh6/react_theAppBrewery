import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app: OK
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component. OK
//3. Use props to render the default Beyonce contact card OK
//so the Card component can be reused for other contacts.OK
//4. Import the contacts.js file to create card components. OK
