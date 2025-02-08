/* eslint-disable react/prop-types */
import { FiCheckCircle, FiXCircle, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const investments = [
  {
    id: 1,
    farmer: "Ravi Kumar",
    amount: "₹50,000",
    allocated: "40%",
    location: "Coimbatore",
    crop: "Rice",
    area: "2 acres",
    season: "Kharif",
    expectedYield: "4 tons",
    status: "Pending",
  },
  {
    id: 2,
    farmer: "Anita Sharma",
    amount: "₹75,000",
    allocated: "60%",
    location: "Coimbatore",
    crop: "Sugarcane",
    area: "3 acres",
    season: "Rabi",
    expectedYield: "6 tons",
    status: "Pending",
  },
  {
    id: 3,
    farmer: "Manoj Patel",
    amount: "₹1,00,000",
    allocated: "50%",
    location: "Coimbatore",
    crop: "Wheat",
    area: "4 acres",
    season: "Rabi",
    expectedYield: "5 tons",
    status: "Pending",
  },
];

const CreateShare = () => {
  const [shares, setShares] = useState(investments);

  const handleApproval = (id, approved) => {
    setShares((prevShares) =>
      prevShares.map((share) =>
        share.id === id
          ? { ...share, status: approved ? "Approved" : "Rejected" }
          : share
      )
    );
  };

  const clearProcessedShares = () => {
    setShares((prevShares) =>
      prevShares.filter((share) => share.status === "Pending")
    );
  };

  return (
    <div className="min-h-screen bg-green-50 text-[#287344] p-6">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Farmer Investment Shares - Approval Panel (Coimbatore)
      </motion.h1>

      <button
        className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center mb-6 hover:shadow-lg hover:bg-red-800 transition-all"
        onClick={clearProcessedShares}
      >
        <FiTrash2 className="mr-2" /> Clear Approved & Rejected Shares
      </button>

      {/* Investment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {shares.map((share) => (
          <motion.div
            key={share.id}
            className="bg-green-100 text-[#287344] p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-lg font-semibold text-[#287344]">
              {share.farmer} ({share.location})
            </div>
            <p className="text-xl font-bold text-[#287344]">{share.amount}</p>
            <p className="text-md font-semibold text-[#287344]">
              Allocated: {share.allocated}
            </p>
            <p className="text-md font-semibold text-[#287344]">
              Crop: {share.crop}
            </p>
            <p className="text-md font-semibold text-[#287344]">
              Area: {share.area}
            </p>
            <p className="text-md font-semibold text-[#287344]">
              Expected Yield: {share.expectedYield}
            </p>
            <p className="text-md font-semibold text-[#287344]">
              Status: {share.status}
            </p>
            {share.status === "Pending" && (
              <div className="flex space-x-4 mt-4">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
                  onClick={() => handleApproval(share.id, true)}
                >
                  <FiCheckCircle className="mr-2" /> Approve
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"
                  onClick={() => handleApproval(share.id, false)}
                >
                  <FiXCircle className="mr-2" /> Reject
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreateShare;
