/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDollarSign, FiMapPin, FiUser, FiTrendingUp } from "react-icons/fi";
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
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-lg group"
    >
      <div className="relative h-40 overflow-hidden rounded-xl">
        <img
          src={farmer.image}
          alt={farmer.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute bottom-2 right-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
          {farmer.profitPercentage} Return
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-900">{farmer.name}</h2>
        <div className="flex items-center text-sm text-gray-500">
          <FiMapPin className="mr-1.5" />
          {farmer.location}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <FiTrendingUp className="mr-1.5" />
          {farmer.crops}
        </div>
      </div>

      <button
        onClick={() => openPopup(farmer)}
        className="mt-4 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
      >
        View Investment
      </button>
    </motion.div>
  );
};

const Shares = () => {
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-8 text-center"
      >
        Agricultural Investment Opportunities
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {farmerData.map((farmer) => (
          <Card key={farmer.id} farmer={farmer} openPopup={setSelectedFarmer} />
        ))}
      </div>

      <AnimatePresence>
        {selectedFarmer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedFarmer.name}
                  </h2>
                  <button
                    onClick={() => setSelectedFarmer(null)}
                    className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <img
                      src={selectedFarmer.image}
                      alt={selectedFarmer.name}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="bg-emerald-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-emerald-800 mb-2 flex items-center">
                        <FiDollarSign className="mr-2" />
                        Investment Details
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {selectedFarmer.shareDetails}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <FiUser className="mr-2" />
                        Investment History
                      </h3>
                      <div className="space-y-3">
                        {selectedFarmer.history.map((entry, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
                          >
                            <div>
                              <p className="font-medium text-gray-900">
                                {entry.investor}
                              </p>
                              <p className="text-sm text-gray-500">
                                {entry.percentage} Share
                              </p>
                            </div>
                            <span className="font-medium text-emerald-700">
                              {entry.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shares;
