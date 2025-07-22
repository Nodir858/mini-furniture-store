import React, { useEffect, useState } from "react";
import "./Modal.css";
import { FaTimes } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, updateQuantity } from "../redux/cartSlice.js";
import { GrUpdate } from "react-icons/gr";

const Modal = ({ isModalOpen, handleClose, data }) => {
  const [qty, setQty] = useState(1);

  const [addedItemToCart, setAddItemToCart] = useState(false);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice: totalPrice,
    };
    dispatch(addToCart(tempProduct));
    setAddItemToCart(true);
  };
  //carried over for quantity
  useEffect(() => {
    if (isModalOpen) {
    } else {
      setQty(1);
      setAddItemToCart(false);
    }
  }, [isModalOpen]);

  const increaseQuantity = (itemId, currentProduct) => {
    const newCurrentProduct = currentProduct + 1;
    setQty(newCurrentProduct);
    dispatch(
      updateQuantity({
        id: itemId,
        quantity: currentProduct,
      })
    );
  };

  const decreaseQuantity = (itemId, currentProduct) => {
    const newCurrentProduct = Math.max(currentProduct - 1, 1);
    setQty(newCurrentProduct);
    dispatch(
      updateQuantity({
        id: itemId,
        quantity: currentProduct,
      })
    );
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="w-auto relative p-5 bg-white overflow-hidden">
            <span
              className="absolute cursor-pointer top-1 right-0 p-3"
              onClick={() => handleClose()}
            >
              <FaTimes></FaTimes>
            </span>
            <div className="md:flex">
              <div className="w-76 m-auto md:w-[15rem] md:flex">
                <img src={data.img} alt="img" className="" />
              </div>
              <div className="ml-6">
                <p className="mb-2 font-bold">{data.short_description}</p>
                <p className="text-red-600 text-xl">{data.price}</p>
                <p className="my-2">{data.short_description}</p>
                <div className="flex items-center">
                  <p>Shades: </p>
                  <select
                    name="shades"
                    id="Shades"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none"
                  >
                    <option value="option">Choose An Options </option>
                    <option value="option">Choose </option>
                    <option value="option">Choose </option>
                    <option value="option">Choose </option>
                    <option value="option">Choose </option>
                    <option value="option">Choose </option>
                  </select>
                </div>
                {/*  */}
                <p>In Stock 400 items</p>
                {/*  */}
                <div className="flex items-center">
                  <div className="flex mr-3">
                    <button
                      className="border py-3 px-6"
                      onClick={() => decreaseQuantity(data.id, qty)}
                    >
                      <FaMinus />
                    </button>
                    <span className="border  py-3 px-6">{qty || 1}</span>
                    <button
                      className="border py-3 px-6"
                      onClick={() => increaseQuantity(data.id, qty)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="bg-amber-400 py-3 px-6 text-white font-bold mr-3">
                    {addedItemToCart ? (
                      <button>
                        <Link to="/cart">View Cart</Link>
                      </button>
                    ) : (
                      <button
                        onClick={() => addItemToCart(data)}
                        className="cursor-pointer"
                      >
                        <Link>Add To Cart</Link>
                      </button>
                    )}
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
