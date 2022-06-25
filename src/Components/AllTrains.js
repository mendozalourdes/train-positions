import React from 'react';
import OneTrain from './OneTrain'

const AllTrains = ({trainPositions, filteredTrainPositions}) => {
    console.log("filtered trains line", filteredTrainPositions)

    const allTrainData = trainPositions.map((data, i) => {
        return (
            <OneTrain
            id={i}
            key={i}
            TrainId={data.TrainId}
            TrainNumber={data.TrainNumber}
            CarCount={data.CarCount}
            DirectionNum={data.DirectionNum}
            CircuitId={data.CircuitId}
            DestinationStationCode={data.DestinationStationCode}
            LineCode={data.LineCode}
            SecondsAtLocation={data.SecondsAtLocation}
            ServiceType={data.ServiceType}
            />

            
        )
    })


    const filteredTrainData = filteredTrainPositions.map((data, i) => {
        return (
            <OneTrain
            id={i}
            key={i}
            TrainId={data.TrainId}
            TrainNumber={data.TrainNumber}
            CarCount={data.CarCount}
            DirectionNum={data.DirectionNum}
            CircuitId={data.CircuitId}
            DestinationStationCode={data.DestinationStationCode}
            LineCode={data.LineCode}
            SecondsAtLocation={data.SecondsAtLocation}
            ServiceType={data.ServiceType}
            />

            
        )
    })



    return (
        <div className="train-container">
            {filteredTrainPositions.length ? filteredTrainData : allTrainData}
        </div>
    );
};

export default AllTrains;