import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-lg ${
      isActive
        ? "bg-emerald-100 border-blue-500 text-gray-700"
        : "text-gray-700"
    }`;

  return (
    <div className="w-[18%] min-h-screen border-r-2 border-gray-200">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink to="/add" className={navLinkClass}>
          <img className="w-5 h-5" src={assets.add_icon} alt="Add Item" />
          <p className="hidden md:block">Add Courses</p>
        </NavLink>

        <NavLink to="/list" className={navLinkClass}>
          <img className="w-5 h-5" src={assets.order_icon} alt="List Items" />
          <p className="hidden md:block">List Course</p>
        </NavLink>

        <NavLink to="/orders" className={navLinkClass}>
          <img className="w-5 h-5" src={assets.order_icon} alt="Order Items" />
          <p className="hidden md:block">Conform Courses</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
