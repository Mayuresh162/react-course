import Shimmer from "./Shimmer";
import { CDN_WEB_URL } from "../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/v4/full?lat=21.106675550492408&lng=79.08052157610655&menuId=' + resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }

  return !restaurant ? (
      <Shimmer />
    ) : (
      <div className="menu">
        <div>
          <h1>Restaurant id: {resId}</h1>
          <h2>{restaurant?.name}</h2>
          <img src={CDN_WEB_URL + restaurant?.cloudinaryImageId} />
          <h3>{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default RestaurantMenu;