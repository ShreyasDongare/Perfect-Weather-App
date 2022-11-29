import React, { useState, useEffect } from "react";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsCloudDrizzle,
} from "react-icons/bs";
import Loading from "./components/Loading";
import Form from "./components/Form";
import WeatherTop from "./components/WeatherTop";
import WeatherMid from "./WeatherMid";
import WeatherBottom from "./WeatherBottom";
import ErrorMessage from "./components/ErrorMessage";

const API_KEY = "a760ebe2645772b675936874aa6dedb0";

const App = () => {
  const [location, setLocaltion] = useState("kolkata");
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null);

 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

   //fetching data
   //fetching weather Data data from costum hook by passing URL
   const fetchData = async () => {
     try {
      setIsError(false)
       const resp = await fetch(url);
       const respJson = await resp.json();
       if(respJson.cod != "404"){
         setData(respJson);
       }else{
        setIsError(true)
        console.log(error)
       }
       
     } catch (error) {
       setIsError(true);
     }
   };

   useEffect(() => {
     fetchData();
   }, [url]);

 //handle Submit of Form Component
 const handleSubmit = (city) => {
   setLocaltion(city);
 };


  //setting laoder if data is falsy or loading
  if (!data) {
    return (
      <div className="flex justify-center ">
        <Loading />
      </div>
    );
  }

  let icon;
  switch (data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy />;
      break;
    case "Clear":
      icon = <IoMdSunny />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill />;
      break;
    case "Snow":
      icon = <IoMdSnow />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;

    default:
      break;
  }

let temp = Math.floor(data.main.temp)

  
  return (
    <div className="w-full h-screen px-8 flex flex-col items-center justify-center">
      <div
        className={`max-w-screen-sm h-[600px] py-6 px-8 w-full bg-gradient-to-br 
         ${ temp > 25 ? " from-orange-400 to-red-500 " : " from-teal-400 to-cyan-700 "}  rounded shadow-xl shadow-gray-500`}
      >
        <div className="w-full text-center my-4 ">
          <h1 className="text-3xl font-medium text-white">Perfect Weather</h1>
        </div>
        <Form handleSubmit={handleSubmit} />
        {isError ? (
          <ErrorMessage />
        ) : (
          <>
            <WeatherTop icon={icon} data={data} />
            <WeatherMid data={data} />
            <WeatherBottom data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
