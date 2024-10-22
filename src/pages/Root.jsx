import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNotes } from "../context/notes-context";
const Root = () => {

  const { isAuthenticated, setIsAuthenticated } = useNotes();
  return (
    <div className="flex">
      {/* side menu */}
      <div className=" w-[250px] p-4">
        <h1 className="font-bold text-2xl">Note App</h1>
        <h2 className="font-bold text-1xl">User {isAuthenticated? "logged in":"logged out"}</h2>
        <ul className="mt-5 side_menu">
          <li className="bg-gray-600 text-center rounded">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="bg-gray-600 mt-1 text-center rounded">
            <NavLink to="/add-notes">Add Notes</NavLink>
          </li>
          <li className="mt-1 bg-gray-600 text-center rounded">
            <NavLink to="/view-notes">View Notes</NavLink>
          </li>
          <li className="mt-1 bg-gray-600 text-center rounded">
            <NavLink to="/data">Show Data</NavLink>
          </li>
          <li className="mt-1 bg-gray-600 text-center rounded">
            <a
              className="cursor-pointer"
              onClick={() => {
                setIsAuthenticated(!isAuthenticated);
              }}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </a>
          </li>
        </ul>
      </div>
      {/* content */}
      <div className=" w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
