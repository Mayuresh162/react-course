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
      <div className="flex justify-around">
        <div>
          <h1 className="text-2xl">Restaurant id: {resId}</h1>
          <h2 className="text-xl">{restaurant?.name}</h2>
          <img src={CDN_WEB_URL + restaurant?.cloudinaryImageId} />
          <h3 className="text-lg">{restaurant?.area}</h3>
          <h3 className="text-lg">{restaurant?.city}</h3>
          <h3 className="text-lg">{restaurant?.avgRating} stars</h3>
          <h3 className="text-lg">{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <h1 className="text-2xl">Menu</h1>
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