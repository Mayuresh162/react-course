import { useState } from "react";
// import { restaurantList } from "../config";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import {filterData} from '../utils/helper'
import useRestaurantCard from "../utils/useRestaurantCard";

 
function Body() {
    const [searchText, setSearchText] = useState('');

    const {allRestaurant, filteredRestaurant, setFilteredRestaurant} = useRestaurantCard();
    
    if (!allRestaurant) return null;

    // if (filteredRestaurant?.length === 0) return <h1>No Restaurant found!!</h1>;

    return allRestaurant?.length === 0 ? (<Shimmer />) : (
        <>
            <div className="m-5">
                <input placeholder="Search" className="mr-5 border-2" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button className="h-14 bg-gray-500 text-white p-2" onClick={() => {
                    const data = filterData(searchText, allRestaurant);
                    
                    setFilteredRestaurant(data);
                }}>Search</button>
            </div>
            <div className="flex flex-wrap">
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