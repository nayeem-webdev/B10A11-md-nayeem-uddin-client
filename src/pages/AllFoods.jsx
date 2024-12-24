import { useEffect, useState } from "react";
import Title from "../components/Title";
import { API } from "../api";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    setFilteredFoods(foods);
  }, [foods]);

  useEffect(() => {
    API.get("/all-foods")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.error("Error Fetching Items:", err.message));
  }, []);
  return (
    <>
      <Title
        backgroundImage="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
        pageName="All Foods"
        subHeading="Hungry? order form our wide collection of foods."
      />
      <SearchFilter products={foods} onFilter={setFilteredFoods} />
      {filteredFoods.length > 0 ? (
        <div className="container mx-auto py-16 px-6 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredFoods.map((food) => (
            <ProductCard food={food} key={food._id} />
          ))}
        </div>
      ) : (
        <div className="container mx-auto py-16 px-6 min-h-screen flex justify-center items-center">
          Nothing to show
        </div>
      )}
    </>
  );
};

export default AllFoods;
