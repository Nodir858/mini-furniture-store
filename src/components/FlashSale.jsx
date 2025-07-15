import React, { useState } from "react";
import { products } from "../data/Data";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import Modal from "../common/Modal";

const FlashSale = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };

  return (
    <div className="w-[70%] m-auto">
      <h1 className="text-center text-3xl font-extrabold uppercase mt-4">
        You are in Kitchen
      </h1>
      <div className="grid grid-cols-4 gap-3">
        {products.map((value, index) => (
          <div key={index} className="mt-3">
            <div className="overflow-hidden relative">
              <div className="img relative">
                <div className="rounded-3xl">
                  <img src={value.img} alt="img" className="rounded-3xl" />
                </div>
                <div className="opacity-75 absolute top-0 right-0 m-4">
                  <div className="bg-white p-2 rounded-full mb-2">
                    <IoIosHeartEmpty></IoIosHeartEmpty>
                  </div>
                  <div className="bg-white p-2 rounded-full">
                    <FaSearch></FaSearch>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-2 rounded-s-2xl">
                  <div className=" bg-black text-white h-8 w-8 grid place-items-center rounded-3xl">
                    <button
                      className="text-2xl"
                      onClick={() => handleOpen(value.id)}
                    >
                      <BiCart />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="mb-2">{value.title}</p>
                <p>${value.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        data={products.find((item) => item.id === isModalOpen)}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      ></Modal>
    </div>
  );
};

export default FlashSale;
