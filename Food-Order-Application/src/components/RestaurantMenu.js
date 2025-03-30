import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const {restaurant, menu} = useRestaurant(id);
  const dispatch= useDispatch();
  const addFoodItem=(item)=>{
    dispatch(addItem(item.card.info));
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {Object.values(menu).map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}- <button className="p-1 bg-green-50" onClick={()=>addFoodItem(item)}>Add</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
