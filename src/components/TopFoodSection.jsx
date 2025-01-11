import { Link } from "react-router-dom";
import FoodSecCard from "./FoodSecCard";
import { useState } from "react";
import { API } from "../api";
import { useEffect } from "react";
import Loading from "../components/Loading";

const TopFoodsSection = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    API.get("/all-foods/most-sell")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.error("Error Fetching Items:", err.message));
  }, []);

  return (
    <section className="container mx-auto py-28 px-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Top Foods</h2>
      <p className="text-center mb-12 max-w-lg mx-auto">
        From our table to yours: the taste that keeps them coming back, the
        treat loved by many, and experiences that speak for themselves.
      </p>
      {/* Food Items */}
      {foods.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foods.map((food) => (
            <FoodSecCard food={food} key={food._id} />
          ))}
        </div>
      ) : (
        <Loading />
      )}

      {/* See All Button */}
      <div className="text-center mt-8">
        <Link to="/all-foods">
          <button className="bg-primary text-white px-8 py-3 text-xl font-bold rounded-lg hover:bg-accent transition duration-300">
            See All Foods
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopFoodsSection;
