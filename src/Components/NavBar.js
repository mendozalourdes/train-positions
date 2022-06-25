import React from "react";
import { colors } from "../Utils/utils";

const NavBar = ({ trainPositions, filteredTrainPositions, handleFilter }) => {
  let lineCodeKey = Object.values(colors).map((color, i) => {
    return (
      <section key={i} className={"key " + color}>
        <div key={i} className={"line-code-key " + color}>
          {Object.keys(colors)[i] === "null"
            ? "Unknown"
            : Object.keys(colors)[i]}
        </div>
      </section>
    );
  });

  const handleChange = (event) => {
    let formType = event.target.className;
    handleFilter(event.target.value, formType);
  };

  return (
    <div className="form-container">
      <section className="form-section">
        <form className="filter-form" onChange={handleChange}>
          <label />
          Line Color:
          <select className="LineCode">
            <option className="all-option" value="all">
              All Trains
            </option>
            <option className="red-option" value="RD">
              Red
            </option>
            <option className="blue-option" value="BL">
              Blue
            </option>
            <option className="yellow-option" value="YL">
              Yellow
            </option>
            <option className="orange-option" value="OR">
              Orange
            </option>
            <option className="green-option" value="GR">
              Green
            </option>
            <option className="silver-option" value="SV">
              Silver
            </option>
            <option className="null-option" value="null">
              Unknown
            </option>
          </select>
        </form>
        <form className="filter-form" onChange={handleChange}>
          <label />
          Service Type:
          <select className="ServiceType">
            <option className="no-passengers" value="NoPassengers">
              No Passengers
            </option>
            <option className="normal-option" value="Normal">
              Normal
            </option>
            <option className="special-option" value="Special">
              Special
            </option>
            <option className="unknown-option" value="Unknown">
              Unknown
            </option>
          </select>
        </form>
        <form className="CarCount" onChange={handleChange}>
          <label />
          Car Count:
          <input
            type="number"
            className="CarCount"
            min="0"
            max="10"
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onKeyPress={(event) => {
              if (!/[0-10]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          ></input>
        </form>
      </section>
      <p className="">
        {filteredTrainPositions.length > 0
          ? "Search Results: " + filteredTrainPositions.length
          : "All Train Positions " +
            "(" +
            trainPositions.length +
            "). " +
            "No Search Results. "}
      </p>
      <div className="key">{lineCodeKey}</div>
    </div>
  );
};

export default NavBar;
