import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEdit, FiSave, FiTrash2, FiMapPin } from "react-icons/fi";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import { GiFallingLeaf } from "react-icons/gi";

const Users = () => {
  const [farmers, setFarmers] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      location: "Coimbatore, Tamil Nadu",
      crops: "Coconut, Banana",
      image: logo1,
    },
    {
      id: 2,
      name: "Meena Ramesh",
      location: "Coimbatore, Tamil Nadu",
      crops: "Tomato, Brinjal",
      image: logo2,
    },
    {
      id: 3,
      name: "Vikram Raj",
      location: "Coimbatore, Tamil Nadu",
      crops: "Rice, Sugarcane",
      image: logo3,
    },
  ]);

  const [editingFarmer, setEditingFarmer] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedLocation, setEditedLocation] = useState("");
  const [editedCrops, setEditedCrops] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(null);

  const handleEdit = (farmer) => {
    setEditingFarmer(farmer.id);
    setEditedName(farmer.name);
    setEditedLocation(farmer.location);
    setEditedCrops(farmer.crops);
  };

  const handleSave = (id) => {
    setFarmers(
      farmers.map((farmer) =>
        farmer.id === id
          ? {
              ...farmer,
              name: editedName,
              location: editedLocation,
              crops: editedCrops,
            }
          : farmer
      )
    );
    setEditingFarmer(null);
  };

  const handleDeleteConfirm = (id) => {
    setFarmers(farmers.filter((farmer) => farmer.id !== id));
    setShowDeleteConfirmation(null);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-50">
      <motion.h1
        className="text-3xl font-bold mb-8 text-emerald-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Farmers Management
        <span className="block text-lg font-normal text-emerald-600 mt-2">
          Coimbatore District Administration
        </span>
      </motion.h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-emerald-100">
            <tr>
              <th className="p-4 text-left text-emerald-900 font-medium">Profile</th>
              <th className="p-4 text-left text-emerald-900 font-medium">Details</th>
              <th className="p-4 text-left text-emerald-900 font-medium">Crops</th>
              <th className="p-4 text-right text-emerald-900 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {farmers.map((farmer) => (
                <motion.tr
                  key={farmer.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="border-t border-emerald-50 hover:bg-emerald-50 transition-colors"
                >
                  {/* Profile Column */}
                  <td className="p-4">
                    <div className="flex items-center">
                      <img
                        src={farmer.image}
                        className="w-12 h-12 rounded-full border-2 border-emerald-200"
                        alt={farmer.name}
                      />
                      <div className="ml-4">
                        {editingFarmer === farmer.id ? (
                          <input
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            className="bg-white px-3 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        ) : (
                          <div className="font-medium text-emerald-900">{farmer.name}</div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Details Column */}
                  <td className="p-4">
                    {editingFarmer === farmer.id ? (
                      <input
                        value={editedLocation}
                        onChange={(e) => setEditedLocation(e.target.value)}
                        className="bg-white px-3 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full"
                      />
                    ) : (
                      <div className="flex items-center text-emerald-700">
                        <FiMapPin className="mr-2" />
                        {farmer.location}
                      </div>
                    )}
                  </td>

                  {/* Crops Column */}
                  <td className="p-4">
                    {editingFarmer === farmer.id ? (
                      <input
                        value={editedCrops}
                        onChange={(e) => setEditedCrops(e.target.value)}
                        className="bg-white px-3 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full"
                      />
                    ) : (
                      <div className="flex items-center text-emerald-700">
                        <GiFallingLeaf className="mr-2" />
                        {farmer.crops}
                      </div>
                    )}
                  </td>

                  {/* Actions Column */}
                  <td className="p-4 text-right">
                    <div className="flex justify-end space-x-2">
                      {editingFarmer === farmer.id ? (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSave(farmer.id)}
                          className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                          <FiSave className="text-lg" />
                        </motion.button>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEdit(farmer)}
                          className="p-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors"
                        >
                          <FiEdit className="text-lg" />
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowDeleteConfirmation(farmer.id)}
                        className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        <FiTrash2 className="text-lg" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full mx-4"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Delete</h3>
              <p className="text-gray-600 mb-6">
               {" Are you sure you want to delete this farmer's record? This action cannot be undone."}
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDeleteConfirmation(null)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteConfirm(showDeleteConfirmation)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center transition-colors"
                >
                  <FiTrash2 className="mr-2" />
                  Confirm Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Users;