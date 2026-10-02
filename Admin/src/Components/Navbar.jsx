import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      {/* <img className="w-[5%]" src={assets.logo} alt="" /> */}
      <div
  to="/"
  className="group inline-flex items-center gap-2"
>
  <span className="
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-xl
    bg-black
    text-sm
    font-bold
    text-white
    shadow-md
    transition-all
    duration-300
    group-hover:rotate-6
    group-hover:scale-105
  ">
    C
  </span>

  <h1 className="
    text-2xl
    font-bold
    tracking-tight
    text-gray-900
  ">
    Citizen<span className="font-normal text-gray-500">Infosys</span>
  </h1>
</div>

      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
