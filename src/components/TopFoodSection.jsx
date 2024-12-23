import { Link } from "react-router-dom";
import FoodSecCard from "./FoodSecCard";

const TopFoodsSection = () => {
  // Fake data for testing
  const foods = [
    {
      id: "1",
      name: "Pizza Margherita",
      category: "Pizza",
      origin: "Italy",
      description:
        "A delicious classic pizza topped with fresh tomatoes and mozzarella.",
      price: 12.99,
      image: "https://via.placeholder.com/400x250?text=Pizza+Margherita",
    },
    {
      id: "2",
      name: "Sushi Rolls",
      category: "Sushi",
      origin: "Japan",
      description: "Fresh sushi rolls served with premium fish and seasonings.",
      price: 15.99,
      image: "https://via.placeholder.com/400x250?text=Sushi+Rolls",
    },
    {
      id: "3",
      name: "Burger Deluxe",
      category: "Burger",
      origin: "USA",
      description: "A juicy burger with cheese, lettuce, and premium sauce.",
      price: 9.99,
      image: "https://via.placeholder.com/400x250?text=Burger+Deluxe",
    },
    {
      id: "4",
      name: "Pad Thai",
      category: "Thai",
      origin: "Thailand",
      description:
        "A flavorful stir-fry with rice noodles, shrimp, and peanuts.",
      price: 10.99,
      image: "https://via.placeholder.com/400x250?text=Pad+Thai",
    },
    {
      id: "5",
      name: "Caesar Salad",
      category: "Salad",
      origin: "USA",
      description: "Crisp lettuce, parmesan, croutons, and Caesar dressing.",
      price: 7.99,
      image: "https://via.placeholder.com/400x250?text=Caesar+Salad",
    },
    {
      id: "6",
      name: "Tacos",
      category: "Mexican",
      origin: "Mexico",
      description: "Soft tacos with seasoned beef, fresh toppings, and salsa.",
      price: 8.99,
      image: "https://via.placeholder.com/400x250?text=Tacos",
    },
  ];

  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Top Foods</h2>

      {/* Food Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <FoodSecCard food={food} key={food.id} />
        ))}
      </div>

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
