import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../context/notes-context";
const Home = () => {
  const navigate = useNavigate();
  const {isAuthenticated, setIsAuthenticated} = useNotes();
  function handleStartTakingNotesClick() {
    navigate("/add-notes");
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 text-center mt-16">
        <h1 className="font-semibold text-3xl">Welcome to Notes App!</h1>
        <p>This is a simple note taking App</p>
        <p>You can add, edit and delete notes</p>
        <p>Click on the side menu to get started</p>
        <button
          onClick={handleStartTakingNotesClick}
          className="bg-green-700 hover:bg-green-800 px-3 mt-6 py-2 rounded"
        >
          Start taking Notes
        </button>
        <button
          onClick={() => {
            setIsAuthenticated(!isAuthenticated);
            navigate("/data");
          }}
          className={`bg-${isAuthenticated ? "yellow" : "red"}-700 hover:bg-${
            isAuthenticated ? "yellow" : "red"
          }-800 px-3 mt-3 py-2 rounded`}
          // There is a better way to make css dynamic 
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Home;
