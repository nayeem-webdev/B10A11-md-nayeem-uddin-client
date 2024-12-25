import { useContext, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Title from "../components/Title";
import { API } from "../api";
import AuthContext from "../context/AuthContext";

const FoodPurchasePage = () => {
  const food = useLoaderData().data;
  const {
    _id,
    foodName,
    foodImage,
    price,
    quantity,
    uid: sellerID,
  } = food || {};

  const [total, setTotal] = useState(price);
  const handleAddQty = (e) => {
    const qty = e.target.value;
    setTotal(qty * price);
  };
  const { user } = useContext(AuthContext);
  const { displayName, email, uid: buyerID } = user || {};
  const handlePurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    const address = form.address.value;
    const mobileNo = form.mobileNo.value;
    const purchaseCount = form.purchaseCount.value;
    const purchaseData = {
      foodId: _id,
      foodName: foodName,
      totalPrice: total,
      buyerName: displayName,
      buyerEmail: email,
      buyingDate: Date.now(),
      sellerID,
      buyerID,
      address,
      mobileNo,
      purchaseCount,
      orderStatus: "pending",
    };

    API.post("/orders", purchaseData)
      .then((response) => console.log("Created Item:", response.data))
      .catch((error) => console.error("Error Creating Item:", error.message));

      //!! update the data of product 
  };

  return (
    <>
      <Title
        backgroundImage="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg"
        pageName="Food Purchase"
        subHeading="Add Your Details And Purchase Now, Happy Shopping!"
      />
      <div className="container mx-auto py-16 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-96 object-cover"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mt-4">
            {foodName}
          </h2>
          <p className="text-2xl font-semibold text-gray-600 mt-2">${price}</p>
          <p className="text-sm text-gray-500 mt-2">{quantity} in stock</p>
        </div>

        {/* Purchase Form */}
        <form onSubmit={handlePurchase} className="flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Complete Your Purchase
          </h3>

          {/* Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Quantity
            </label>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-normal text-gray-800">
                ${price}
              </span>
              <span className="text-xl">X</span>
              <input
                type="number"
                id="purchaseCount"
                name="purchaseCount"
                min="1"
                max={quantity}
                defaultValue="1"
                className="w-20 p-2 border rounded-md text-gray-900 text-center"
                onChange={handleAddQty}
              />
              <span className="text-xl">= </span>
              <span
                id="totalPrice"
                className="font-normal text-xl text-gray-800"
              >
                $ {total}
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="mt-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              placeholder="Flat: A4, Food Mansion, House No: 6, Road: 03"
              type="text"
              id="address"
              name="address"
              className="w-full mt-2 p-2 border rounded-md text-gray-900"
              required
            />
          </div>

          {/* Mobile No */}
          <div className="mt-4">
            <label
              htmlFor="mobileNo"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              placeholder="+88 01800 000000"
              type="tel"
              id="mobileNo"
              name="mobileNo"
              className="w-full mt-2 p-2 border rounded-md text-gray-900"
              required
            />
          </div>

          {/* Submit Btn */}
          <button
            type="submit"
            className="mt-8 w-full  bg-primary text-white py-3 rounded-full hover:bg-accent transition flex justify-center items-center gap-2 font-bold"
          >
            Purchase Now
          </button>
        </form>
      </div>
    </>
  );
};

FoodPurchasePage.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodPurchasePage;
