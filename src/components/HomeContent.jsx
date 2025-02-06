/* eslint-disable react/prop-types */
import Dashboard from "./Dashboard";
import Shares from "./Shares";
import Users from "./Users";


function HomeContent({ selected }) {
  return (
    <div className="w-full h-screen">
      {selected === "Dashboard" && <Dashboard />}
      {selected === "Create User" && <CreateUser />}
      {selected === "Create Share" && <CreateShare />}
      {selected === "Shares" && <Shares />}
      {selected === "Users" && <Users />}
    </div>
  );
}
export default HomeContent;


const CreateShare = () => <div>View analytics here.</div>;
const CreateUser = () => <div>Plan your workouts here.</div>;
