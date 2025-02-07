/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { FiUsers, FiBarChart, FiPieChart } from "react-icons/fi";
import { motion } from "framer-motion";

const data = [
  { name: "Village A", crops: 500 },
  { name: "Village B", crops: 700 },
  { name: "Village C", crops: 300 },
  { name: "Village D", crops: 650 },
  { name: "Village E", crops: 800 },
];

const pieData = [
  { name: "Rice", value: 400 },
  { name: "Wheat", value: 300 },
  { name: "Corn", value: 300 },
  { name: "Millets", value: 250 },
  { name: "Pulses", value: 350 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f0fdf4] text-[#287344] p-6">
      {/* Header */}
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        VAO Dashboard - Coimbatore District
      </motion.h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card icon={<FiUsers />} title="Total Farmers" value="1,250" />
        <Card
          icon={<FiBarChart />}
          title="Total Crop Yield"
          value="8,500 Tons"
        />
        <Card icon={<FiPieChart />} title="Active Users" value="320" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-green-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-[#287344]">
            Crop Production Comparison
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#287344" />
              <YAxis stroke="#287344" />
              <Tooltip
                contentStyle={{ backgroundColor: "#f0fdf4", color: "#287344" }}
              />
              <Bar dataKey="crops" fill="#287344" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-green-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-[#287344]">
            Crop Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      ["#f0fdf4", "#e1f0d1", "#c3e0a1", "#a5d071", "#87c041"][
                        index
                      ]
                    }
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#f0fdf4", color: "#287344" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, value }) => {
  return (
    <motion.div
      className="bg-green-100 p-4 rounded-lg shadow-lg flex items-center space-x-4"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl text-[#287344]">{icon}</div>
      <div>
        <p className="text-lg font-semibold text-[#287344]">{title}</p>
        <p className="text-xl font-bold text-[#287344]">{value}</p>
      </div>
    </motion.div>
  );
};

export default Dashboard;
