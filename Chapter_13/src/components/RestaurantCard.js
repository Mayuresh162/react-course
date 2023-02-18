import { CDN_WEB_URL } from "../../config";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

function RestaurantCard({name, cuisines, cloudinaryImageId, avgRating, deliveryTime }) {

  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col border-2 m-2 p-2 h-96 w-80 font-bold">
      <img src={CDN_WEB_URL + cloudinaryImageId} alt="" className="w-full" />
      <span>{name}</span>
      <span>{cuisines.join(', ')}</span>
      <span>{avgRating} stars</span>
      <span>{deliveryTime} minutes</span>
      <h5 className="font-bold">{user.name} - {user.email}</h5>
    </div>
  );
}

export default RestaurantCard;