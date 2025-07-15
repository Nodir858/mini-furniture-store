import React, { useState } from "react";
import { navbar } from "../data/Data";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Sidebar from "./Sidebar.jsx";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sticky header py-4 top-0 z-50 shadow-xl">
      <div className=" flex flex-wrap justify-between items-center">
        <div className="">
          <div className="logo font-bold">miniture</div>
        </div>
        <div className="flex flex-wrap text-base py-3">
          {navbar.map((value, key) => (
            <div key={key} className="mr-5">
              <Link to={value.path}>{value.nav}</Link>
            </div>
          ))}
        </div>
        <li className="flex">
          <Link className="mr-5 text-2xl">
            <FaHeart></FaHeart>
          </Link>
          <Link className="mr-5 text-2xl">
            <FaRegUser />
          </Link>
          <Link className="relative mr-5 text-2xl" onClick={toggleSidebar}>
            <MdOutlineShoppingBag />
            <div className="absolute top-[1px]">
              <span>0</span>
            </div>
          </Link>
        </li>
      </div>
      <div>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          closeSidebar={() => toggleSidebar()}
        ></Sidebar>
      </div>
    </div>
  );
};

export default Header;
