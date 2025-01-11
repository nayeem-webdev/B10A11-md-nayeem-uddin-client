import { FiTruck, FiCoffee, FiStar } from "react-icons/fi";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const FoodServicePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}

      <Title
        backgroundImage="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg"
        pageName="Delightful Dining Delivered"
        subHeading="Fresh ingredients, expertly prepared, delivered with care."
      />

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <FiTruck size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-sm text-gray-600">
            Our quick and reliable delivery ensures your meals arrive fresh.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <FiCoffee size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Exquisite Taste</h3>
          <p className="text-sm text-gray-600">
            Enjoy a wide variety of premium meals crafted by expert chefs.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <FiStar size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality You Trust</h3>
          <p className="text-sm text-gray-600">
            Sourced from trusted suppliers to ensure exceptional quality.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <footer className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Try Our Service?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Sign up today and experience premium dining at your doorstep.
          </p>
          <Link
            to={"/all-foods"}
            className="bg-primary text-white px-8 py-4 rounded-lg shadow-md font-semibold hover:bg-accent"
          >
            Get Started Now
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FoodServicePage;
