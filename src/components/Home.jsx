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
    <div className="flex bg-[#f0fdf4] text-gray-900">
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
      className="sticky top-0 h-screen shrink-0 border-r border-gray-700 bg-[#287344] p-2 text-white"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
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
        className="mt-4 flex h-10 w-full items-center rounded-md text-gray-300 transition-colors hover:bg-[#0000002e] hover:text-white"
      >
        <motion.div
          layout
          className="grid h-full w-10 place-content-center text-lg"
        >
          <FiLogOut />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-sm font-medium"
          >
            Logout
          </motion.span>
        )}
      </motion.button>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open, notifs }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-[#f0fdf4] text-black"
          : "text-white hover:bg-[#2e8b57]"
      }`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-sm font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-yellow-200 text-xs text-gray-900"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-gray-700">
      <a href="/user/profile">
        <div className="flex p-2 m-1 mb-3 cursor-pointer items-center justify-between rounded-md hover:bg-[#0000002e] transition-colors">
          <div className="flex items-center gap-2">
            {open && (
              <motion.div
                className=""
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
              >
                <span className="block text-lg font-bold tracking-widest text-[#f0fdf4]">
                  {"VAO"}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-gray-700 transition-colors hover:bg-[#0000002e] "
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};
