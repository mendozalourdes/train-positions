import React from "react";
import { colors, serviceTypes } from "../Utils/utils";
import "../App.css";
import { useState } from "react";

const OneTrain = ({
  id,
  TrainId,
  TrainNumber,
  CarCount,
  DirectionNum,
  CircuitId,
  DestinationStationCode,
  LineCode,
  SecondsAtLocation,
  ServiceType,
}) => {
  const [openTrainInfo, setOpenTrainInfo] = useState(false);
  const carCountImage = () => {
    let cars = [];

    if (CarCount > 0) {
      for (let i = 1; i <= CarCount; i++) {
        cars.push("🚂");
      }
    }
    let eachCar = cars.map((car, i) => {
      return <div key={i}>{car}</div>;
    });

    return <div className="car-count">{eachCar}</div>;
  };

  return (
    <button
      className={colors[LineCode] + " collapsible"}
      type="button"
      onClick={() => setOpenTrainInfo(!openTrainInfo)}
    >
      <h1>Train {TrainNumber}</h1>
      <h3>Car Count: {!CarCount ? "0" : carCountImage()}</h3>
      <h3>Service Type: {serviceTypes[ServiceType]}</h3>
      <div className={!openTrainInfo ? "content" : "info"}>
        <div>Train Id: {TrainId}</div>
        <div>Train Number: {TrainNumber}</div>
        <div className="car-count">Car Count: {CarCount}</div>
        <div>Direction Number: {DirectionNum}</div>
        <div>Circuit Id: {CircuitId}</div>
        <div>Destination Station Code: {DestinationStationCode}</div>
        <div>Line Code: {LineCode ? LineCode : "Unknown Line Code"}</div>
        <div>Seconds At Location: {SecondsAtLocation}</div>
        <div>Service Type: {serviceTypes[ServiceType]}</div>
      </div>
    </button>
  );
};

export default OneTrain;
