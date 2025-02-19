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
  Legend
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

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#6366F1", "#EC4899"];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 pb-6 border-b border-emerald-100"
      >
        <h1 className="text-3xl font-bold text-emerald-900">
          Agricultural Analytics Dashboard
        </h1>
        <p className="text-emerald-600 mt-2">
          Coimbatore District - Crop Season 2024
        </p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card 
          icon={<FiUsers className="w-6 h-6" />} 
          title="Total Farmers" 
          value="1,250"
          color="bg-blue-500"
        />
        <Card
          icon={<FiBarChart className="w-6 h-6" />}
          title="Total Crop Yield"
          value="8,500 Tons"
          color="bg-green-500"
        />
        <Card 
          icon={<FiPieChart className="w-6 h-6" />} 
          title="Active Users" 
          value="320"
          color="bg-purple-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow-xl border border-emerald-50"
        >
          <h2 className="text-xl font-semibold mb-6 text-emerald-900">
            Village-wise Crop Production
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#047857' }}
                  axisLine={{ stroke: '#059669' }}
                />
                <YAxis 
                  tick={{ fill: '#047857' }}
                  axisLine={{ stroke: '#059669' }}
                />
                <Tooltip
                  contentStyle={{
                    background: "#ECFDF5",
                    border: "1px solid #A7F3D0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(5, 150, 105, 0.1)"
                  }}
                />
                <Bar 
                  dataKey="crops" 
                  radius={[4, 4, 0, 0]}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow-xl border border-emerald-50"
        >
          <h2 className="text-xl font-semibold mb-6 text-emerald-900">
            Crop Distribution Analysis
          </h2>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend 
                  iconType="circle"
                  wrapperStyle={{ paddingTop: '20px' }}
                  formatter={(value) => (
                    <span className="text-emerald-800">{value}</span>
                  )}
                />
                <Tooltip
                  contentStyle={{
                    background: "#ECFDF5",
                    border: "1px solid #A7F3D0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(5, 150, 105, 0.1)"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, value, color }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4 border border-emerald-50"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`${color} p-3 rounded-lg text-white shadow-md`}>
        {icon}
      </div>
      <div>
        <h3 className="text-emerald-600 text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-emerald-900">{value}</p>
      </div>
    </motion.div>
  );
};

export default Dashboard;