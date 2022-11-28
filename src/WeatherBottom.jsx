import React from "react";
import {
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";


const WeatherBottom = ({ data }) => {
  return (
    <div className="w-full my-8">
      <div className="flex justify-around gap-5">
        <div className="flex flex-col   text-white">
          <p className="flex my-3  items-center gap-2  text-sm ">
            <BsEye /> visibility {data.visibility / 1000}km
          </p>
          <p className="flex my-3  items-center gap-2  text-sm ">
            <BsWater /> Humidity {data.main.humidity}%
          </p>
        </div>
        <div className="flex flex-col  text-white">
          <p className="flex my-3  items-center gap-2  text-sm ">
            <BsThermometer /> Feels Like {data.main.feels_like}°c
          </p>
          <p className="flex my-3  items-center gap-2  text-sm ">
            <BsWind /> Wind {data.wind.speed}m/s
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherBottom;
