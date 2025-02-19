/* eslint-disable react/prop-types */
import { 
  FiCheckCircle, 
  FiXCircle, 
  FiTrash2, 
  FiClock, 
  FiDollarSign, 
  FiMapPin, 
  FiActivity 
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { forwardRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";

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

const StatusBadge = ({ status }) => {
  const statusConfig = {
    Pending: { color: "bg-yellow-100 text-yellow-800", icon: <FiClock className="text-sm" /> },
    Approved: { color: "bg-green-100 text-green-800", icon: <FiCheckCircle className="text-sm" /> },
    Rejected: { color: "bg-red-100 text-red-800", icon: <FiXCircle className="text-sm" /> },
    default: { color: "bg-gray-100 text-gray-800", icon: <FiClock className="text-sm" /> },
  };

  const config = statusConfig[status] || statusConfig.default;

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
      {config.icon}
      <span className="ml-1.5">{status || "Unknown"}</span>
    </div>
  );
};

const CreateShare = () => {
  const [shares, setShares] = useState(investments);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApproval = (id, approved) => {
    setShares((prevShares) =>
      prevShares.map((share) =>
        share.id === id ? { ...share, status: approved ? "Approved" : "Rejected" } : share
      )
    );
  };

  const clearProcessedShares = () => {
    setShares((prevShares) => prevShares.filter((share) => share.status === "Pending"));
    setIsModalOpen(false);
  };

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-2 flex items-center">
              <FiActivity className="mr-3 text-emerald-600 text-3xl" />
              Investment Share Management
            </h1>
            <p className="text-lg text-emerald-700">Coimbatore Region Approval Panel</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-emerald-600 text-white px-5 py-3 rounded-xl flex items-center hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200"
            onClick={() => setIsModalOpen(true)}
          >
            <FiTrash2 className="mr-2 text-lg" />
            Clear Processed Entries
          </motion.button>
        </motion.header>

        {/* Confirmation Dialog */}
        <AnimatePresence>
          {isModalOpen && (
            <Dialog
              open={isModalOpen}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setIsModalOpen(false)}
              aria-labelledby="confirm-clear-dialog-title"
              aria-describedby="confirm-clear-dialog-description"
            >
              <DialogTitle 
                id="confirm-clear-dialog-title" 
                className="font-bold text-emerald-900"
              >
                Confirm Clear Action
              </DialogTitle>
              <DialogContent 
                id="confirm-clear-dialog-description" 
                className="text-emerald-700"
              >
                This will permanently remove all approved/rejected entries. Continue?
              </DialogContent>
              <DialogActions>
                <Button 
                  onClick={() => setIsModalOpen(false)} 
                  variant="outlined" 
                  className="text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                >
                  Cancel
                </Button>
                <Button
                  onClick={clearProcessedShares}
                  variant="contained"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  startIcon={<FiTrash2 />}
                >
                  Confirm Clear
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </AnimatePresence>

        {/* Shares Grid */}
        <AnimatePresence>
          {shares.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shares.map((share) => (
                <motion.div
                  key={share.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-emerald-900">{share.farmer}</h2>
                      <p className="text-emerald-600 flex items-center mt-1 text-sm">
                        <FiMapPin className="mr-1.5" />
                        {share.location}
                      </p>
                    </div>
                    <StatusBadge status={share.status} />
                  </div>

                  <div className="space-y-4 border-t border-emerald-100 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600">Investment Amount</span>
                      <span className="text-2xl font-bold text-emerald-900 flex items-center">
                        <FiDollarSign className="mr-1" />
                        {share.amount}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-emerald-600">Crop Type</p>
                        <p className="font-medium text-emerald-900">{share.crop}</p>
                      </div>
                      <div>
                        <p className="text-sm text-emerald-600">Cultivation Area</p>
                        <p className="font-medium text-emerald-900">{share.area}</p>
                      </div>
                      <div>
                        <p className="text-sm text-emerald-600">Season</p>
                        <p className="font-medium text-emerald-900">{share.season}</p>
                      </div>
                      <div>
                        <p className="text-sm text-emerald-600">Expected Yield</p>
                        <p className="font-medium text-emerald-900">{share.expectedYield}</p>
                      </div>
                    </div>

                    {share.status === "Pending" && (
                      <div className="flex space-x-3 pt-4 border-t border-emerald-100">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-emerald-100 transition-colors"
                          onClick={() => handleApproval(share.id, false)}
                        >
                          <FiXCircle className="mr-2" />
                          Reject
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
                          onClick={() => handleApproval(share.id, true)}
                        >
                          <FiCheckCircle className="mr-2" />
                          Approve
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-emerald-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FiActivity className="text-6xl text-emerald-600 mb-4" />
              <h2 className="text-2xl font-bold text-emerald-900 mb-2">No Shares Available</h2>
              <p className="text-emerald-700 text-center">
                All shares have been processed. Check back later for new submissions.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CreateShare;