import Shimmer from "../components/Shimmer";
import { CDN_WEB_URL } from "../../config";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [restaurant, setRestauraunt] = useState(null);

  const restaurant = useRestaurantMenu(resId);

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