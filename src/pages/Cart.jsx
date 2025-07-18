import React from "react";
import pageHeader from "../assets/page_header.jpeg";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, updateQuantity, removeItem } from "../redux/cartSlice";
import { FaTimes } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
const Cart = () => {
  const dispatch = useDispatch();

  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );

  const removeFromCart = (itemId) => {
    dispatch(
      removeItem({
        id: itemId,
      })
    );
    dispatch(getCartTotal());
  };

  const increaseQuantity = (itemId, currentProduct) => {
    dispatch(
      updateQuantity({
        id: itemId,
        quantity: currentProduct + 1,
      })
    );
    dispatch(getCartTotal());
  };

  const decreaseQuantity = (itemId, currentProduct) => {
    if (currentProduct > 1) {
      dispatch(
        updateQuantity({
          id: itemId,
          quantity: currentProduct - 1,
        })
      );
      dispatch(getCartTotal());
    }
  };

  return (
    <>
      <div className="w-[80%] m-auto relative">
        <div className="absolute top-20 left-20">
          <h1 className="font-bold text-3xl">Cart</h1>
          <p>
            <Link>Home</Link>/<Link>Cart</Link>
          </p>
        </div>
        <img src={pageHeader} alt="img" />
        <div>
          {cartProducts.length === 0 ? (
            <h1>Your cart has no product</h1>
          ) : (
            <div>
              <table className="w-full shadow-2xl rounded-2xl">
                <thead className="bg-blue-950 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">SubTotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((item, key) => (
                    <tr key={key}>
                      <td className="text-center px-4 py-2">
                        <span
                          onClick={() => removeFromCart(item.id)}
                          className="cursor-pointer"
                        >
                          <FaTimes></FaTimes>
                        </span>
                      </td>
                      <td className="text-center px-4 py-2">
                        <div className="flex items-center justify-between">
                          <img
                            src={item.img}
                            alt="img"
                            className="h-40 w-40 object-contain mr-2"
                          />
                          <p className="font-semibold">{item.title}</p>
                        </div>
                      </td>
                      <td className="text-center px-4 py-2">{item.price}</td>
                      <td className="text-center px-4 py-2">
                        <div className="flex mr-3">
                          <button
                            className="border mt-4 py-3 px-6"
                            onClick={() =>
                              decreaseQuantity(item.id, item.quantity)
                            }
                          >
                            <FaMinus></FaMinus>
                          </button>
                          <span className="border mt-4 py-3 px-6">
                            {item.quantity || 1}
                          </span>
                          <button
                            className="border mt-4 py-3 px-6"
                            onClick={() =>
                              increaseQuantity(item.id, item.quantity)
                            }
                          >
                            <FaPlus></FaPlus>
                          </button>
                        </div>
                      </td>
                      <td className="text-center px-4 py-2">
                        ${item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="w-1/2 bg-white mt-5 rounded-2xl shadow-2xl px-5 py-3 leading-7 font-bold">
                <h1 className="text-center ">Cart Total</h1>
                <div className="flex justify-between">
                  <h1>Sub Total :</h1>
                  <span>{totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <h1>Shipping Charge :</h1>
                  <span>${10}</span>
                </div>
                <div className="flex justify-between">
                  <h1>Grand Total :</h1>
                  <span>${totalAmount + 10}</span>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="bg-amber-400 py-1 px-3 rounded-lg text-white">
                    <Link>Proceed to checkout</Link>
                  </div>
                  <div className="bg-red-600 py-1 px-3 text-white rounded-lg">
                    <Link to="/">Continue Shopping</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
