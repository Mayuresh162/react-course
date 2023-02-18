import { CDN_WEB_URL } from "../../config";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ name, description, cloudinaryImageId, price, id }) => {

    const dispatch = useDispatch();

    const removeCarthandler = (itemId) => {
        dispatch(removeItem(itemId));
    }

    return (
        <div className="flex flex-col border-2 m-2 p-2 h-auto w-80 font-bold">
          <img src={CDN_WEB_URL +  cloudinaryImageId} className="w-full"/>
          <h2 className="font-bold text-xl">{name}</h2>
          <h3>{description}</h3>
          <h4>Rupees: {price / 100}</h4>
          <button className="h-14 bg-gray-500 text-white p-2" onClick={() => removeCarthandler(id)}>REMOVE</button>
        </div>
    );
};

export default FoodItem;