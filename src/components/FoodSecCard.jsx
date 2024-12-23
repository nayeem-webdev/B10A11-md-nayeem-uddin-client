import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

const FoodSecCard = ({ food }) => {
  return (
    <div
      key={food.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl"
    >
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <FaPizzaSlice className="mr-2" /> {food.category}
          <FaMapMarkerAlt className="ml-4 mr-2" /> {food.origin}
        </div>
        <p className="text-gray-600 text-sm">{food.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">${food.price}</span>
          <Link
            to={`/food-details/${food.id}`}
            className="text-primary text-sm"
          >
            <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-primary transition duration-300">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

FoodSecCard.propTypes = {
  food: PropTypes.string,
};

export default FoodSecCard;
