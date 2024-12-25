import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const GalleryCard = ({ food }) => {
  const {
    _id,
    foodName,
    foodImage,
    description,
    displayName: postedBy,
  } = food || {};

  return (
    <div className="relative overflow-hidden rounded-md group aspect-square w-full self-start bg-white">
      {/* Image */}
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Hover Details */}
      <div className="absolute inset-0 bg-black/75 flex flex-col justify-center items-center text-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-semibold">{foodName}</h3>
        <p className="text-sm mt-1">{description}</p>
        <span className="text-xs mt-2 italic">Posted by: {postedBy}</span>

        <Link
          to={`/food-purchase/${_id}`}
          className="mt-3 bg-primary text-white py-3 px-5 rounded-md hover:bg-accent transition flex justify-center items-center gap-2 font-bold"
        >
          <FaShoppingCart />
          Purchase
        </Link>
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default GalleryCard;
