/* eslint-disable react/prop-types */
import CreateShare from "./CreateShare";
import CreateUser from "./CreateUser";
import Dashboard from "./Dashboard";
import Shares from "./Shares";
import Users from "./Users";


function HomeContent({ selected }) {
  return (
    <div className="w-full transition-all h-screen">
      {selected === "Dashboard" && <Dashboard />}
      {selected === "Create User" && <CreateUser />}
      {selected === "Create Share" && <CreateShare />}
      {selected === "Shares" && <Shares />}
      {selected === "Users" && <Users />}
    </div>
  );
}
export default HomeContent;

