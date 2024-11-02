import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 mb-4">
      <div className="w-24 h-24 overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 ml-4">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-gray-800">${item.price}</p>
          <button
            onClick={removeFromCart}
            className="p-2 text-red-500 hover:text-red-600 transition-colors"
            aria-label="Remove item"
          >
            <FcDeleteDatabase size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
