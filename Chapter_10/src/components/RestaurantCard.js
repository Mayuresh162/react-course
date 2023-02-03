import { CDN_WEB_URL } from "../../config";

function RestaurantCard({name, cuisines, cloudinaryImageId, avgRating, deliveryTime }) {

    return (
      <div className="flex flex-col border-2 m-2 p-2 h-80 w-64 font-bold">
        <img src={CDN_WEB_URL + cloudinaryImageId} alt="" className="w-full" />
        <span>{name}</span>
        <span>{cuisines.join(', ')}</span>
        <span>{avgRating} stars</span>
        <span>{deliveryTime} minutes</span>
      </div>
    );
}

export default RestaurantCard;