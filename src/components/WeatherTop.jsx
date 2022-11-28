import React from "react";

const WeatherTop = ({ icon, data }) => {
    const date = new Date()
  return (
    <div className="w-full my-8">
      <div className="flex text-white gap-10 px-4">
        <div className="flex justify-center items-center">
          <div className="text-5xl">{icon}</div>
        </div>
        <div>
          <p>
            {data.name}, {data.sys.country}
          </p>
          <p> {date.getUTCDate()} / {date.getUTCMonth()+1}/{date.getUTCFullYear()} </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherTop;
