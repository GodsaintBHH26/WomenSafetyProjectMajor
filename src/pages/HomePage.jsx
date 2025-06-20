import React from "react";
import Card from "../components/card";
import { Link } from "react-router-dom";

function HomePage() {
  const pictureLoc = {
    picSos: "/a-women-looking-at-his-watch.jpg",
    picMap: "/a-women-holding-a-phone-with-a-map-app-.jpg",
    picContact: "/emergency-contacts--add-a-picture-of-women-too-.jpg",
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center h-[30rem] items-center bg-gradient-to-r from-[#AA00FF] to-[#7200F5] relative overflow-hidden">
        <img
          src="/a-mobile-phone-that-is-using-an-app-named-nirvay---removebg-preview.png"
          alt=""
          className="absolute z-10 h-[550px] w-[580px] -top-5 left-1 animate-shadowgone "
        />
        <img
          src="/hero-women.png"
          alt=""
          className="absolute z-10 h-[600px] right-1 -top-5 animate-shadowmove "
        />
        <h1 className="text-black font-semibold text-6xl text-center animate-texthighlight capitalize z-20">
          Never alone, <br /> Never left behind.
        </h1>
        <p className="text-xl font-semibold capitalize mt-2 z-20">
          Download the mobile app now
        </p>
        <div className="flex gap-5 font-semibold mt-5 z-20">
          <button className="btn-fill-hollow">Download</button>
          <button
            className="btn-hollow-fill"
            onClick={() => {
              window.open(
                "https://github.com/GodsaintBHH26/WomenSafetyProjectMajor",
                "_blank"
              );
            }}
          >
            More info
          </button>
        </div>
      </div>

      <div className="w-full h-96 bg-[#E6FEFF] flex flex-col justify-center items-center gap-5 pt-5">
        <h2 className="text-black font-bold text-5xl hover:shadow-2xl">Features </h2>
        <div className="w-full h-96 bg-[#E6FEFF] flex justify-center items-center gap-15">
          <Link>
            <Card
              title="SOS"
              details="Send notifications to your family and close friends along with nearest police station. Also notify all the other user within 50m radius so that they can help you."
              pic={pictureLoc.picSos}
            />
          </Link>

          <Link to="/maps">
            <Card
              title="Map Features"
              details="Allows the user to check all the safe and unsafe areas on map to avoid bad situations. The user can determine a whether to take a certain road or not based on these locations on the map."
              pic={pictureLoc.picMap}
            />
          </Link>

          <Link to="/contact">
            <Card
              title="Contacts"
              details="The User can set contacts they want to send notifications to when they are in danger."
              pic={pictureLoc.picContact}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
