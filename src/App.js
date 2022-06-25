import React from 'react';
import { useState, useEffect } from 'react';
import {fetchTrainPositions} from './Utils/apiCalls'
import loadingSpin from "./Images/loadingSpin.gif";
import AllTrains from '../src/Components/AllTrains'
import Form from './Components/NavBar'


const App = () => {
  const [trainPositions, setTrainPositions] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [time, setTime] = useState(Date.now());
  const [filteredTrainPositions, setFilteredTrainPositions] = useState([])
  

  const getTrainData = async () => {

    setTrainPositions('')
    try {
        let trainData = await fetchTrainPositions()
  
        setTrainPositions(trainData)
        setLoading(false)
        // console.log("trainData", trainData)
      } catch (error) {
        setError(error.message)
    }
  }


const handleFilter = (event, formType) => {

  let allTrains = trainPositions
  let filteredTrains = allTrains.filter((train) => {
if(event == "null") {
  return train[formType] == null

} else {
   return train[formType] == event
}
  })

  setFilteredTrainPositions(filteredTrains)
  return filteredTrainPositions
}


useEffect(() => {
  const interval = setInterval(() => setTime(Date.now()), 7000);
  getTrainData();
  return () => {
    clearInterval(interval);
  };
}, []);



 
  if(trainPositions)  {
    return (

      <main>
        <div className="App">
          <h1 className="title ">Train Positions</h1>
          <Form handleFilter={handleFilter} trainPositions={trainPositions}  filteredTrainPositions={filteredTrainPositions}/>
          <AllTrains  filteredTrainPositions={filteredTrainPositions} trainPositions={trainPositions}/>
        </div>
      </main>
    );

  }

  if(loading) {
    return (
      <main>
        <div className="App">
          <h1 className="title ">Train Positions</h1>
          <section className="loading-container ">
            <p className="loading-message title">Loading Train Positions</p>
            <img className="loading" src={loadingSpin} />
          </section>
        </div>
      </main>
    );
  }
  
};

export default App;