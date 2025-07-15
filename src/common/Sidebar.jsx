import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <div>
      <div>
        <div
          style={{
            transform: `translateX(${isSidebarOpen ? "0%" : "100%"})`,
          }}
          className="fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto "
        >
          <div className="border-b mb-4">
            <h1 className="text-3xl p-4">Your cart</h1>
          </div>
          <div className="p-4">
            <span className="absolute top-0 right-0 p-4" onClick={closeSidebar}>
              <FaTimes />
            </span>
            <div className="text-2xl font-bold">
              Your Product has NO Product
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
