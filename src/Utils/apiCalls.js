
  export const fetchTrainPositions = async () => {
    let url = "https://api.wmata.com/TrainPositions/TrainPositions?contentType={json}&api_key=6f779e3eef3d4392ae8f920b162a961e";
    let response = await fetch(url);

    let data = await checkForErrors(response);
    // console.log("data", data.TrainPositions)
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