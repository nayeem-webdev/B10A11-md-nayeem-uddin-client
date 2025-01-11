import { FiStar } from "react-icons/fi";

const reviews = [
  {
    name: "Emily R.",
    image: "https://i.ibb.co.com/pLjN8Dm/pexels-photo-3763188.jpg",
    comment:
      "Absolutely loved the service! The food arrived hot, fresh, and tasted amazing. Will definitely order again.",
    rating: 5,
  },
  {
    name: "Michael B.",
    image: "https://i.ibb.co.com/PCk7sdJ/pexels-photo-1462980.jpg",
    comment:
      "A seamless experience from start to finish. The flavors are out of this world!",
    rating: 4,
  },
  {
    name: "Sophia C.",
    image: "https://i.ibb.co.com/kyPwLD1/pexels-photo-1687675.jpg",
    comment:
      "Great value for the quality of food. Highly recommend to anyone who loves gourmet experiences at home.",
    rating: 5,
  },
  {
    name: "Rajesh P.",
    image: "https://i.ibb.co.com/92M1HNM/pexels-photo-1861594.jpg",
    comment:
      "An absolutely delightful experience! The dishes were gourmet-level and beautifully packaged.",
    rating: 4,
  },
];

const ReviewSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-28 text-white bg-fixed"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/bbTCyyy/pexels-photo-1482803.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center mb-12 max-w-lg mx-auto">
          Don’t just take our word for it—hear what our customers have to say
          about our fresh, flavorful, and exceptional service!
        </p>

        {/* Reviews Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 space-y-4 transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <FiStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
