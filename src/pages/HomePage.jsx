import React from "react";

function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col justify-center h-[30rem] items-center bg-gradient-to-r from-[#AA00FF] to-[#7200F5] relative overflow-hidden">
        <img src="public/a-mobile-phone-that-is-using-an-app-named-nirvay---removebg-preview.png" alt="" className="absolute z-10 h-[550px] w-[580px] -top-5 left-1 " />
        <img src="public/hero-women.png" alt="" className="absolute z-10 h-[600px] right-1 -top-5 "/>
        <h1 className="text-black font-semibold text-6xl text-center animate-texthighlight capitalize z-20">Never alone, <br/> Never left behind.</h1>
        <p className="text-xl font-semibold capitalize mt-2 z-20" >Download the mobile app now</p>
        <div className="flex gap-5 font-semibold mt-5 z-20">
          <button className="btn-fill-hollow">Download</button>
          <button className="btn-hollow-fill">More info</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
