import { useState, useEffect } from "react";
// import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const filterData = (searchText, restaurants) => {
    return restaurants.filter(restaurant => restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
};
 
function Body() {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        getRestaurants();
    }, [])

    // console.log(useState());

    async function getRestaurants() {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.106675550492408&lng=79.08052157610655&page_type=DESKTOP_WEB_LISTING');
            const json = await response.json();
            setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        } catch {
            throw new Error('Failed to fetch restaurants');
        }
    }
    
    if (!allRestaurant) return null;

    // if (filteredRestaurant?.length === 0) return <h1>No Restaurant found!!</h1>;

    return allRestaurant?.length === 0 ? (<Shimmer />) : (
        <>
            <div className="search">
                <input placeholder="Search" className="search-text" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button onClick={() => {
                    const data = filterData(searchText, allRestaurant);
                    
                    setFilteredRestaurant(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurant.map(restaurantItem => {
                        return (
                            <Link
                            to={"/restaurant/" + restaurantItem.data.id}
                            key={restaurantItem.data.id}
                        >
                            <RestaurantCard {...restaurantItem.data} />
                        </Link>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Body;