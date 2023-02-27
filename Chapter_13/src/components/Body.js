import { useState, useContext } from "react";
// import { restaurantList } from "../config";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import {filterData} from '../utils/helper'
import useRestaurantCard from "../utils/useRestaurantCard";
import UserContext from "../utils/UserContext";

 
function Body() {
    const [searchText, setSearchText] = useState('');
    const {user, setUser} = useContext(UserContext);

    const {allRestaurant, filteredRestaurant, setFilteredRestaurant} = useRestaurantCard();
    
    if (!allRestaurant) return null;

    // if (filteredRestaurant?.length === 0) return <h1>No Restaurant found!!</h1>;

    return allRestaurant?.length === 0 ? (<Shimmer />) : (
        <>
            <div className="m-5">
                <input placeholder="Search" className="mr-5 border-2" value={searchText} data-testid="search-input" onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button className="h-14 bg-gray-500 text-white p-2" data-testid="search-btn" onClick={() => {
                    const data = filterData(searchText, allRestaurant);
                    
                    setFilteredRestaurant(data);
                }}>Search</button>

                <div className="m-5">
                    <input value={user.name} onChange= {
                        e => setUser({
                            ...user,
                            name: e.target.value,
                        })
                        }></input>
                        <input value={user.email} onChange= {
                        e => setUser({
                            ...user,
                            email: e.target.value,
                        })
                    }></input>
                </div>

            </div>
            <div className="flex flex-wrap" data-testid="res-list">
                {
                    (filteredRestaurant?.length === 0) ? <h1>No Restaurant found!!</h1> :
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
