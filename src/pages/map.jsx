import React, { useState } from "react";
import MapComponent from "../components/map-component";

function Map() {
  const [mode, setMode]=useState('area');
  return (
    <>
      <div className="w-full h-[36rem] flex flex-col justify-center items-center gap-5">
        <div className="w-96 flex justify-center gap-5 font-semibold">
          <button className="bg-amber-600 px-5 p-2 rounded-lg hover:outline-3 hover:outline-amber-600 hover:bg-white hover:text-amber-600" onClick={()=>{setMode('route')}}>Set Routes</button>
          <button className="bg-amber-600 px-5 p-2 rounded-lg hover:outline-3 hover:outline-amber-600 hover:bg-white hover:text-amber-600" onClick={()=>{setMode('area')}}>Area Demography</button>
        </div>
        <MapComponent mde={mode}/>
      </div>
    </>
  );
}

export default Map;
