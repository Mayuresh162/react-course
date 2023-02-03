import { useState, useEffect } from "react";
import { FETCH_CARD_URL } from "../../config";

const useRestaurantCard = () => {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, [])
    
    // console.log(useState());
    
    async function getRestaurants() {
        try {
            const response = await fetch(FETCH_CARD_URL);
            const json = await response.json();
            setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        } catch {
            throw new Error('Failed to fetch restaurants');
        }
    }

    return { allRestaurant, filteredRestaurant, setFilteredRestaurant};
}

export default useRestaurantCard;
