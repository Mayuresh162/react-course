import { CDN_WEB_URL } from "../../config";
import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../utils/cartSlice";

const FoodItem = ({ item }) => {
    const { name, description, cloudinaryImageId, price, id, count } = item;
    const dispatch = useDispatch();

    const removeCarthandler = (itemId) => {
        dispatch(removeItem(itemId));
    }

    const addToCart = (item) => {
        dispatch(addItem(item))
      }

    return (
        <div className="flex flex-col border-2 m-2 p-2 h-auto w-80 font-bold">
          <img src={CDN_WEB_URL +  cloudinaryImageId} className="w-full"/>
          <h2 className="font-bold text-xl">{name}</h2>
          <h3>{description}</h3>
          <h4>&#8377; {(price * count) / 100}</h4>
          <div className="flex justify-between">
            <div className="flex items-center px-2 border border-green-500 w-20 justify-between">
                <button className="text-green-400" onClick={() => removeCarthandler(id)}>-</button>
                <span>{count}</span>
                <button className="text-green-400" onClick={() => addToCart(item)}>+</button>
            </div>
            <button className="h-8 bg-green-500 text-white px-2">CHECKOUT</button>
          </div>
        </div>
    );
};

export default FoodItem;