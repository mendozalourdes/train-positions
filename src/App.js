import React from 'react';
import { useState, useEffect } from 'react';
import {fetchTrainPositions} from './apiCalls'
import loadingSpin from "./Images/loadingSpin.gif";


const App = () => {
  const [trainPositions, setTrainPositions] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)


  const getTrainData = async () => {

    setTrainPositions('')
    try {
        let trainData = await fetchTrainPositions()
  
        setTrainPositions(trainData)
        setLoading(false)
        console.log("trainData", trainData)
      } catch (error) {
        setError(error.message)
    }
  }

  useEffect(() => {
    getTrainData();
  }, []);

 
  if(trainPositions) {
    return (

      <main>
        <div className="App">
          <h1 className="title ">Train Positions</h1>
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