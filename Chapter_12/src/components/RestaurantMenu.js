import Shimmer from "../components/Shimmer";
import { CDN_WEB_URL } from "../../config";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [restaurant, setRestauraunt] = useState(null);

  const restaurant = useRestaurantMenu(resId);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item))
  }

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
              <div className="flex items-center justify-between m-5" key={item.id}>
                <li>{item.name}</li>
                <button className="h-14 bg-gray-500 text-white p-2" onClick={() => addToCart(item)}>ADD</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default RestaurantMenu;