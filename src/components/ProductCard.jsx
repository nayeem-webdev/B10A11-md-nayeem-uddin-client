import PropTypes from "prop-types";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ food }) => {
  const { foodName, foodImage, category, origin, price, description } =
    food || {};
  const addToCart = (foodName) => {
    toast.success(`${foodName} added to cart!`);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs sm:max-w-full">
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{foodName}</h2>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-bold">Category: </span>
          {category}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-bold">Origin: </span>
          {origin}
        </p>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">${price}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => addToCart(foodName)}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              title="Add to Cart"
            >
              <FaShoppingCart size={20} />
            </button>
            <button
              onClick={() => toast.info(`${foodName} details clicked!`)}
              className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
              title="View Details"
            >
              <FaInfoCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default ProductCard;
