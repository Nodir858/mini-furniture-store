import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem } from "../redux/cartSlice";
import { Link } from "react-router";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();

  const { data: cartProduct, totalAmount } = useSelector((state) => state.cart);

  const cartSelector = useSelector((state) => state.cart.data);

  useEffect(() => {
    dispatch(getCartTotal());
  }, cartSelector);

  const removeFromCart = (itemId) => {
    dispatch(
      removeItem({
        id: itemId,
      })
    );
    dispatch(getCartTotal());
  };

  return (
    <div>
      <div>
        <div
          style={{
            transform: `translateX(${isSidebarOpen ? "0%" : "100%"})`,
          }}
          className="fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto "
        >
          <div className="border-b mb-4">
            <h1 className="text-3xl p-4">Your cart</h1>
          </div>
          <div className="p-4">
            <span className="absolute top-0 right-0 p-4" onClick={closeSidebar}>
              <FaTimes />
            </span>
            {cartProduct.length === 0 ? (
              <div className="text-2xl font-bold">
                Your Product has NO Product
              </div>
            ) : (
              <div className="">
                {cartProduct.map((item, key) => (
                  <div key={key} className="flex justify-between mb-4">
                    <div className="relative">
                      <img src={item.img} alt="img" height={128} width={128} />
                      <span
                        className="absolute top-0 -mt-2 -ml-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTimes></FaTimes>
                      </span>
                    </div>
                    <div>
                      <p>{item.title}</p>
                    </div>

                    <div>
                      <p>{item.price}</p>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
                <div className="flex bg-black text-white p-5 justify-between items-center">
                  <h2 className="justify-items-center">
                    Sub Total: <span>${totalAmount}</span>
                  </h2>
                  <div className="bg-white text-black p-3">
                    <Link to="/cart">View Cart</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
