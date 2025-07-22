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
      <div className="relative flex flex-wrap flex-col justify-between items-center px-3 py-2 md:flex-row ">
        <div className="w-full flex justify-start text-4xl md:w-0 md:text-base sm:ml-7">
          <div className="logo font-bold">miniture</div>
        </div>
        <div className="flex flex-wrap flex-col gap-4 py-3 text-3xl md:text-xl text-center md:flex-row">
          {navbar.map((value, key) => (
            <div
              key={key}
              className="cursor-pointer mr-5 border-1 px-20 rounded-2xl active:bg-amber-600 transition duration-200 md:active:bg-amber-50 md:border-0 md:px-0"
            >
              <Link to={value.path}>{value.nav}</Link>
            </div>
          ))}
        </div>

        <li className="flex text-3xl absolute right-1 top-4 md:text-2xl md:relative md:right-0 md:top-0">
          <Link className="mr-5">
            <FaHeart></FaHeart>
          </Link>
          <Link className="mr-5">
            <FaRegUser />
          </Link>
          <Link className="relative mr-5" onClick={toggleSidebar}>
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
