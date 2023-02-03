import { CDN_WEB_URL } from "../../config";

function RestaurantCard({name, cuisines, cloudinaryImageId, avgRating, deliveryTime }) {

    return (
      <div className="card">
        <img src={CDN_WEB_URL + cloudinaryImageId} alt="" className="menu-logo" />
        <span>{name}</span>
        <span>{cuisines.join(', ')}</span>
        <span>{avgRating} stars</span>
        <span>{deliveryTime} minutes</span>
      </div>
    );
}

export default RestaurantCard;