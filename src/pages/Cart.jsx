import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-6">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Your Cart Summary</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Total Items:</span> {cart.length}
            </p>
            <p className="text-xl font-bold text-gray-800 mb-4">
              Total Amount: ${totalAmount.toFixed(2)}
            </p>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-16">
          <h1 className="text-3xl font-semibold text-gray-700 mb-4">
            Cart is Empty
          </h1>
          <Link to="/">
            <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
