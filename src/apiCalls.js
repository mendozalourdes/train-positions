
  export const fetchTrainPositions = async () => {
    let url = "https://api.wmata.com/TrainPositions/TrainPositions?contentType={json}&api_key=33b5a574d7ec4e938a8e559492accf6e";
    let response = await fetch(url);

    let data = await checkForErrors(response);
    console.log("data", data.TrainPositions)
    return data.TrainPositions;
 
  };

export const checkForErrors = response => {
    if (response.status === 404) {
      throw new Error('Oops, something went wrong. Please check back later.');
    } else if (response.status === 500) {
      throw new Error(
        "Our servers seem to be down, please check back later!"
      );
    } else if (response.ok) {
      return response.json();
    } else {
      throw new Error('Oops, something went wrong. Please try again!');
    }
  };