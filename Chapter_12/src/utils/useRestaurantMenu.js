import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../../config";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestauraunt] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL+ resId);
        const json = await data.json();
        console.log(json.data);
        setRestauraunt(json.data);
    }

    return restaurant;
}

export default useRestaurantMenu;