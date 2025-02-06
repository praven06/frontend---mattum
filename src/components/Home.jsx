/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState } from "react";
import { MdFoodBank } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import {
  FiBarChart,
  FiChevronsRight,
  FiHome,
  FiList,
  FiLogOut,
} from "react-icons/fi";
import { motion } from "framer-motion";
import HomeContent from "./HomeContent";

export const Home = () => {
  const [selected, setSelected] = useState("Dashboard");
  return (
    <div className="flex bg-gray-900 text-gray-50">
      <Sidebar selected={selected} setSelected={setSelected} />
      <HomeContent selected={selected} />
    </div>
  );
};

const Sidebar = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(true);

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-gray-700 bg-gray-800 p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option
          Icon={FiHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiList}
          title="Create User"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={MdFoodBank}
          title="Create Share"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={CgGym}
          title="Shares"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiBarChart}
          title="Users"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      {/* Logout Button */}
      <motion.button
        layout
        onClick={() => alert("Logout clicked!")} // Dummy logout action
        className="mt-4 flex h-10 w-full items-center rounded-md text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
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
            className="text-xs font-medium"
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
          ? "bg-blue-200 text-black"
          : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
    >
      <motion.div
        layout
        className={`grid h-full w-10 place-content-center text-lg ${
          selected === title ? "text-black" : "text-gray-400"
        }`}
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
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
    <div className="mb-3 border-b border-gray-700 pb-3">
      <a href="/user/profile">
        <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-gray-700">
          <div className="flex items-center gap-2">
            <a
              href="https://www.flaticon.com/free-icons/farmer"
              title="farmer icons"
            ></a>

            {open && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
              >
                <span className="block text-s font-bold font-serif text-blue-300">
                  {"Officer"}
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
      className="absolute bottom-0 left-0 right-0 border-t border-gray-700 transition-colors hover:bg-gray-700"
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
