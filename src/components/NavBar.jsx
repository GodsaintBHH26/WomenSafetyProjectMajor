import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="bg-black w-screen h-16 flex justify-between items-center p-5 ">
        <Link to='/'>
          <h1 className="text-3xl font-semibold ">NIRVAY</h1>
        </Link>

        <div className="flex gap-10 items-center font-semibold">
          <Link to="/maps">Maps</Link>
          <Link to='/contact'>Contacts</Link>
          <Link to='/login'><button className="hover:bg-amber-600 duration-200 px-2 py-1 rounded focus:outline-2 ">Login</button></Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
