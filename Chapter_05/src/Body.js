import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

const filterData = (searchText, restaurants) => {
    return restaurants.filter(restaurant => restaurant.data.name.includes(searchText));
};
 
function Body() {
    const [allRestaurant, setAllRestaurant] = useState(restaurantList);
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <div className="search">
                <input placeholder="Search" className="search-text" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button onClick={() => {
                    const data = filterData(searchText, restaurantList);
                    setAllRestaurant(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    allRestaurant.map(restaurantItem => {
                        return <RestaurantCard {...restaurantItem.data} key={restaurantItem.data.id}/>
                    })
                }
            </div>
        </>
    );
}

export default Body;