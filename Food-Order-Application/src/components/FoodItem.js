
import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, description, price, imageId }) => {
  console.log(imageId);
  return (
    <div className="w-56 p-2 m-2 shadow-lg hover:bg-white bg-pink-50">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price/100}</h4>
    </div>
  );
};

export default FoodItem;
