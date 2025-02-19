/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { IoBarChartOutline, IoCreate } from "react-icons/io5";
import {                
  FiBarChart2,
  FiChevronsRight,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { HiMiniUsers } from "react-icons/hi2";

import { motion } from "framer-motion";
import HomeContent from "./HomeContent";

export const Home = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState("Dashboard");
  return (
    <div className="fh-dvh flex bg-[#f0fdf4] text-gray-900 overflow-y-scroll">
      <Sidebar selected={selected} setSelected={setSelected} />
      <HomeContent selected={selected} />
    </div>
  );
};

const Sidebar = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <motion.nav
      layout
      className={`sticky top-0 h-screen shrink-0 bg-emerald-800 p-3 text-white transition-all duration-300 ${
        open ? "w-64" : "w-20"
      }`}
    >
      <TitleSection open={open} />

      <div className="space-y-2 mt-6">
        <Option
          Icon={FiBarChart2}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FaUserPlus}
          title="Create User"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={IoCreate}
          title="Create Share"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={IoBarChartOutline}
          title="Shares"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={HiMiniUsers}
          title="Users"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      {/* Logout Button */}
      <motion.button
        layout
        onClick={() => navigate('/')}
        className="mt-auto flex h-12 w-full items-center rounded-lg bg-emerald-700/30 hover:bg-emerald-700/40 transition-colors"
      >
        <div className="grid h-12 w-12 place-content-center text-lg">
          <FiLogOut />
        </div>
        {open && (
          <motion.span className="text-sm font-medium">
            Logout
          </motion.span>
        )}
      </motion.button>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`group relative flex h-12 w-full items-center rounded-lg transition-all ${
        selected === title
          ? "bg-emerald-50 text-emerald-800 font-semibold shadow-sm"
          : "text-emerald-100 hover:bg-emerald-700/40"
      }`}
    >
      <div className="grid h-12 w-12 place-content-center">
        <Icon className={`text-xl ${selected === title ? 'text-emerald-700' : 'text-emerald-200'}`} />
      </div>
      {open && (
        <motion.span className="text-sm tracking-wide">
          {title}
        </motion.span>
      )}
      
      {!open && (
        <div className="absolute left-full ml-3 hidden group-hover:flex bg-emerald-900 text-white px-3 py-2 rounded-lg shadow-lg">
          <span className="text-sm whitespace-nowrap">{title}</span>
        </div>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="flex items-center justify-center h-16 border-b border-emerald-700/40">
      <motion.div
        className="flex items-center gap-2 text-emerald-50"
        animate={open ? { opacity: 1 } : { opacity: 0 }}
      >
        <span className="text-2xl font-bold tracking-tight">VAO</span>
      </motion.div>
    </div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen(!open)}
      className="absolute -right-3 top-6 bg-emerald-800 border-2 border-emerald-50 rounded-full p-1.5 shadow-lg hover:bg-emerald-700 transition-colors"
    >
      <FiChevronsRight
        className={`text-emerald-50 transition-transform ${open ? "rotate-180" : ""}`}
      />
    </motion.button>
  );
};
