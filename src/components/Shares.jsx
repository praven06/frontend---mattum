/* eslint-disable react/prop-types */
import { useState } from "react";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";

const farmerData = [
  {
    id: 1,
    name: "Arun Kumar",
    location: "Coimbatore, Tamil Nadu",
    crops: "Coconut, Banana",
    image: logo1,
    investment: "1 Lakh",
    profitPercentage: "10%",
    shareDetails:
      "For 1 acre of Coconut farming this season, a 10% investment is ₹1,00,000. The buyer would receive 10% in profit.",
  },
  {
    id: 2,
    name: "Meena Ramesh",
    location: "Coimbatore, Tamil Nadu",
    crops: "Tomato, Brinjal",
    image: logo2,
    investment: "50,000",
    profitPercentage: "12%",
    shareDetails:
      "For 2 acres of Tomato farming this season, a 10% investment is ₹50,000. The buyer would receive 12% in profit.",
  },
  {
    id: 3,
    name: "Vikram Raj",
    location: "Coimbatore, Tamil Nadu",
    crops: "Rice, Sugarcane",
    image: logo3,
    investment: "75,000",
    profitPercentage: "8%",
    shareDetails:
      "For 3 acres of Rice farming this season, a 10% investment is ₹75,000. The buyer would receive 8% in profit.",
  },
];

const Slide = ({ farmer, current, handleSlideClick, openPopup }) => {
  const isActive = current === farmer.id;
  const classNames = `relative flex-shrink-0 w-full transition-opacity duration-500 ease-in-out ${
    isActive ? "opacity-100" : "opacity-50"
  }`;

  return (
    <li className={classNames} onClick={() => handleSlideClick(farmer.id)}>
      <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
          alt={farmer.name}
          src={farmer.image}
        />
        <div className="relative z-10 text-white text-center bg-black bg-opacity-50 p-4 rounded-lg">
          <img
            src={farmer.image}
            alt="farmer logo"
            className="w-12 h-12 mx-auto mb-2 rounded-full"
          />
          <h2 className="text-lg md:text-2xl font-bold">{farmer.name}</h2>
          <p className="text-sm">{farmer.crops}</p>
          <p className="text-xs mt-1">Location: {farmer.location}</p>
          <p className="text-xs mt-1">Profit/Loss: {farmer.profitPercentage}</p>
          <button
            className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white"
            onClick={() => openPopup(farmer)}
          >
            View Details
          </button>
        </div>
      </div>
    </li>
  );
};

const Slider = ({ heading }) => {
  const [current, setCurrent] = useState(1);
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 1 ? farmerData.length : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === farmerData.length ? 1 : prev + 1));
  };

  const openPopup = (farmer) => {
    setSelectedFarmer(farmer);
  };

  const closePopup = () => {
    setSelectedFarmer(null);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <h3 className="text-center text-2xl font-bold mb-4">{heading}</h3>
      <div className="overflow-hidden relative w-full">
        <ul
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(current - 1) * 100}%)` }}
        >
          {farmerData.map((farmer) => (
            <Slide
              key={farmer.id}
              farmer={farmer}
              current={current}
              handleSlideClick={setCurrent}
              openPopup={openPopup}
            />
          ))}
        </ul>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4">
        <button
          className="p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700"
          onClick={handlePreviousClick}
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4">
        <button
          className="p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700"
          onClick={handleNextClick}
        >
          &#8594;
        </button>
      </div>

      {/* Popup Modal for Share Details */}
      {selectedFarmer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center relative">
            <h2 className="text-xl font-bold mb-2">{selectedFarmer.name}</h2>
            <p className="text-sm mb-2">{selectedFarmer.shareDetails}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function Shares() {
  return (
    <div className="p-4">
      <Slider heading="Farmer Shares" />
    </div>
  );
}

export default Shares;
