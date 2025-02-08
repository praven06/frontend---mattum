import { useState } from "react";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import { motion } from "framer-motion";

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

  const handleDelete = (id) => {
    setFarmers(farmers.filter((farmer) => farmer.id !== id));
  };

  return (
    <div className="p-6 h-full bg-green-50">
      <motion.h1
        className="text-3xl font-bold mb-6 text-[#287344]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Admin - Farmers Management (Coimbatore District)
      </motion.h1>

      <motion.table
        className="w-full border-collapse border border-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <thead className="bg-[#287344] text-white">
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Crops</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer) => (
            <motion.tr
              key={farmer.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border"
            >
              <td className="p-2 flex justify-center items-center">
                <img
                  src={farmer.image}
                  className="w-16 h-16 rounded-full"
                  alt={farmer.name}
                />
              </td>
              <td className="border p-2">
                {editingFarmer === farmer.id ? (
                  <input
                    type="text"
                    className="border p-1 rounded w-full"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  farmer.name
                )}
              </td>
              <td className="border p-2">
                {editingFarmer === farmer.id ? (
                  <input
                    type="text"
                    className="border p-1 rounded w-full"
                    value={editedLocation}
                    onChange={(e) => setEditedLocation(e.target.value)}
                  />
                ) : (
                  farmer.location
                )}
              </td>
              <td className="border p-2">
                {editingFarmer === farmer.id ? (
                  <input
                    type="text"
                    className="border p-1 rounded w-full"
                    value={editedCrops}
                    onChange={(e) => setEditedCrops(e.target.value)}
                  />
                ) : (
                  farmer.crops
                )}
              </td>
              <td className="gap-2">
                <div className="flex justify-around">
                  {editingFarmer === farmer.id ? (
                    <button
                    onClick={() => handleSave(farmer.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                    onClick={() => handleEdit(farmer)}
                    className="bg-[#287342]  text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}
                <motion.button
                  onClick={() => handleDelete(farmer.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  whileHover={{ scale: 1.1 }}
                  >
                  Delete
                </motion.button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default Users;
