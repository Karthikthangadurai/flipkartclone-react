import React, { useEffect, useState } from "react";
import Header from "../components/Home page/Header";

const Cartlist = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(saved);
  }, []);

  const handleRemove = (name) => {
    const updated = cartItems.filter((item) => item.name !== name);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  return (
    <section>
      <div className="sticky top-0">
        <Header cartCount={cartItems.length} />
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid md:grid-cols-4 gap-5">
            {cartItems.map((item, index) => (
              <div key={index} className="p-4 border shadow rounded bg-white text-center">
                <img src={item.image} alt={item.name} className="h-32 mx-auto hover:scale-110 transition" />
                <p className="font-semibold mt-2">{item.name}</p>
                <p className="text-blue-700 font-bold">{item.amount}</p>
                <div className="flex justify-evenly">
                <button onClick={() => handleRemove(item.name)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-black">
                  Remove
                </button>
                <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-black">
                  Buy Now
                </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cartlist;
