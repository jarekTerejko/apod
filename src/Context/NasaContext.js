import React, { useState, useEffect, createContext } from "react";

export const NasaContext = createContext();

const NasaContextProvider = props => {
  const [astronomyData, setAstronomyData] = useState({});
  const [loading, setLoading] = useState(false);

  const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=";
  const apiKey = "LEA0cT91AN1Hy8e1ailJ6cl8iOS1jJBKrMrubaZ9";

  const getNasaData = async () => {
    try {
      setLoading(true)
      const repsonse = await fetch(`${apiUrl}${apiKey}`);
      const data = await repsonse.json();
      console.log(data);
      setAstronomyData(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    getNasaData();
  }, []);


  return (  
    <NasaContext.Provider
      value={{
        astronomyData,
        loading
      }}
    >
      {props.children}
    </NasaContext.Provider>
  );
};

export default NasaContextProvider;
