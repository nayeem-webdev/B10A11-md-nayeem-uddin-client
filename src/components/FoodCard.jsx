import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaPizzaSlice, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { _id, foodName, foodImage, category, origin, price } =
    food || {};
  return (
    <div className="bg-white shadow-md rounded-lg p-4 rounded-tr-[160px]">
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-48 object-cover rounded-t-lg rounded-tr-[150px]"
      />
      <div className="pt-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{foodName}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-2 h-5 overflow-hidden">
          <FaPizzaSlice className="mr-2" />
          <span className=" h-5 overflow-hidden">{category}</span>
          <FaMapMarkerAlt className="ml-4 mr-2" />
          <span className=" h-5 overflow-hidden">{origin}</span>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span className="text-xl font-bold text-gray-800">${price}</span>
          <div className="flex space-x-2">
            <Link
              to={`/food-purchase/${_id}`}
              className="bg-primary text-white p-2 rounded-md hover:bg-primary/70"
              title="Add to Cart"
            >
              <FaShoppingCart size={20} />
            </Link>
            <Link
              to={`/food/${_id}`}
              className="bg-accent text-white p-2 rounded-md hover:bg-accent/70"
              title="View Details"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodCard;
