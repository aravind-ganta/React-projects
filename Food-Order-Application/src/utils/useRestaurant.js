import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  // get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    const res = json?.data?.cards[2]?.card?.card?.info;
    const menu =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    setRestaurant(res);
    setMenu(menu);
  }
  // return res data
  return {restaurant, menu};
};

export default useRestaurant;
