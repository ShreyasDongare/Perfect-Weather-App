import React, { useState } from 'react'
import {IoMdSearch} from 'react-icons/io'

const Form = ({handleSubmit}) => {
  const [city, setCity] = useState("");


  

  return (
    <div className="w-full my-8">
      <form onSubmit={(e)=>{e.preventDefault();handleSubmit(city)}}>
        <div className="flex justify-between items-center h-10 bg-white rounded-md  px-4">
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="capitalize placeholder:lowercase w-full focus:outline-none"
          />
          <button type="submit">
            <IoMdSearch className="hover:scale-110 duration-300" size={25} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form
