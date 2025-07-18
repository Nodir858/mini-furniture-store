import React, { useEffect, useState } from "react";
import { navbar } from "../data/Data";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Sidebar from "./Sidebar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice.js";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [sticky, setSticky] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.screenY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { totalItems } = useSelector((state) => state.cart);

  const cartSelector = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartSelector]);

  return (
    <div
      className={`sticky top-0 z-100 bg-white ${
        sticky ? "py-4 shadow-xl" : ""
      }`}
    >
      <div className="relative flex flex-wrap justify-between items-center px-3 py-2">
        <div className="ml-10">
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
            <div className="absolute flex justify-center items-center text-center top-[-10px] right-[-10px] text-sm bg-amber-400 rounded-full w-[25px] h-[25px]">
              <span>{totalItems}</span>
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
