import React, { useState } from "react";
import { products } from "../data/Data";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import Modal from "../common/Modal";

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };
  const [item, setItem] = useState(products);
  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandsList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filterItems = (value) => {
    const newItems = products.filter((newValue) => newValue.category === value);
    setItem(newItems);
  };

  const filterByBrands = (value) => {
    const newBrands = products.filter((brand) => brand.brand === value);
    setItem(newBrands);
  };

  return (
    <>
      <div className="flex">
        <div className="w-40 lg:w-full lg:max-w-3xs">
          <div className=" bg-whites h-full text-center leading-7 shadow-2xl rounded-2xl px-5 py-3">
            <div className="my-4">
              <h1 className="text-4xl font-semibold text-center">Filter</h1>
            </div>
            <div>
              <h1 className="text-center text-xl mb-3">By Category</h1>
              <div className="text-center">
                {categoryList.map((value, index) => (
                  <div
                    key={index}
                    className="bg-amber-300 rounded-2xl mb-2 cursor-pointer"
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() => filterItems(value)}
                    >
                      {value}
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-center mt-5">
                <h1 className="text-xl mb-3">By Brands</h1>
                {brandsList.map((value, index) => (
                  <div
                    key={index}
                    className="bg-amber-300 rounded-2xl mb-2 cursor-pointer"
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() => filterByBrands(value)}
                    >
                      {value}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <button
                  className="border w-full rounded-2xl"
                  onClick={() => setItem(products)}
                >
                  <h1 className="cursor-pointer">All</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] m-auto">
          <h1 className="text-center text-3xl font-extrabold uppercase mt-4">
            You are in Kitchen
          </h1>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
            {item.map((value, index) => (
              <div key={index} className="mt-3">
                <div className="relative">
                  <div className="h-66 w-66 m-auto relative lg:relative lg:h-auto lg:w-auto">
                    <div className="lg:rounded-3xl lg:h-auto lg:w-auto">
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
      </div>
    </>
  );
};

export default Shop;
