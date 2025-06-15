import React, { useState } from "react";
import MapComponent from "../components/map-component";

function Map() {
  const [mode, setMode]=useState('area');
  return (
    <>
      <div className="w-full h-[36rem] flex flex-col justify-center items-center gap-5">
        <div className="w-96 flex justify-center gap-5 font-semibold">
          {mode === 'route' ? (<button className="hover:bg-amber-600 px-5 p-2 hover:text-white rounded-lg outline-3 outline-amber-600 bg-white text-amber-600">Set Routes</button>) : (<button className="bg-amber-600 px-5 p-2 rounded-lg hover:outline-3 hover:outline-amber-600 hover:bg-white hover:text-amber-600" onClick={()=>{setMode('route')}}>Set Routes</button>)}

          {mode === 'area' ? (<button className="hover:bg-amber-600 px-5 p-2 hover:text-white rounded-lg outline-3 outline-amber-600 bg-white text-amber-600">Area Demography</button>) : (<button className="bg-amber-600 px-5 p-2 rounded-lg hover:outline-3 hover:outline-amber-600 hover:bg-white hover:text-amber-600" onClick={()=>{setMode('area')}}>Area Demography</button>)}
        </div>
        <MapComponent mde={mode}/>
      </div>
    </>
  );
}

export default Map;
