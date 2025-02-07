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
    history: [
      { investor: "Rajesh Sharma", percentage: "5%", amount: "₹50,000" },
      { investor: "Priya Singh", percentage: "3%", amount: "₹30,000" },
    ],
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
    history: [
      { investor: "Amit Verma", percentage: "4%", amount: "₹20,000" },
      { investor: "Kavita Rao", percentage: "2%", amount: "₹10,000" },
    ],
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
    history: [
      { investor: "Suresh Kumar", percentage: "6%", amount: "₹45,000" },
      { investor: "Meena Das", percentage: "3%", amount: "₹22,500" },
    ],
  },
];

const Card = ({ farmer, openPopup }) => {
  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <img
        src={farmer.image}
        alt={farmer.name}
        className="w-full h-32 object-cover rounded-lg mb-2"
      />
      <h2 className="text-lg font-bold text-gray-800">{farmer.name}</h2>
      <p className="text-sm text-gray-600">{farmer.crops}</p>
      <p className="text-xs text-gray-500">Location: {farmer.location}</p>
      <p className="text-xs text-gray-500">
        Profit/Loss: {farmer.profitPercentage}
      </p>
      <button
        className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white"
        onClick={() => openPopup(farmer)}
      >
        View Details
      </button>
    </div>
  );
};

const Shares = () => {
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  const openPopup = (farmer) => {
    setSelectedFarmer(farmer);
  };

  const closePopup = () => {
    setSelectedFarmer(null);
  };

  return (
    <div className="p-4">
      <h3 className="text-center text-2xl font-bold mb-4">Farmer Shares</h3>
      <div className="flex flex-wrap gap-10 justify-center mt-10">
        {farmerData.map((farmer) => (
          <Card key={farmer.id} farmer={farmer} openPopup={openPopup} />
        ))}
      </div>

      {selectedFarmer && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg shadow-xl w-96 max-w-full">
            <button
              className="absolute top-2 right-2 h-10 w-10  text-gray-600 hover:text-gray-800 text-xl"
              onClick={closePopup}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-2 text-center">
              {selectedFarmer.name}
            </h2>
            <img
              src={selectedFarmer.image}
              alt={selectedFarmer.name}
              className="w-24 h-24 mx-auto rounded-full mb-2 border-2 border-green-500"
            />
            <p className="text-sm mb-2 text-center text-gray-700">
              {selectedFarmer.shareDetails}
            </p>
            <h3 className="text-md font-semibold mt-4 text-gray-800">
              Investment History:
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {selectedFarmer.history.map((entry, index) => (
                <li key={index} className="border-b py-1">
                  <span className="font-medium text-gray-800">
                    {entry.investor}:
                  </span>{" "}
                  {entry.percentage} ({entry.amount})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shares;
