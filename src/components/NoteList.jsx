import React from "react";
import { NavLink } from "react-router-dom";
import { useNotes } from "../context/notes-context";

const NoteList = ({ title, date, id }) => {
  const { notes, setNotes } = useNotes();
  const deleteNote = (event, id) => {
    event.preventDefault();
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="flex flex-col gap-2 p-5 my-3 border w-full md:w-2/3 mx-auto rounded shadow bg-gray-700">
      <h1 className="tex-3xl font-semibold">{title}</h1>
      {/* <p>{note.content}</p> */}
      {/* <p>Status : {note.status}</p> */}
      <p>Date : {date}</p>
      <div className="flex gap-2 mt-4">
        <NavLink to={`/note/${id}/${title}`}>
          <button className="px-3 py-1 bg-green-700 rounded text-white hover:bg-green-800">
            View
          </button>
        </NavLink>
        <button className="px-3 py-1 bg-yellow-700 rounded text-white hover:bg-yellow-800">
          Update
        </button>
        <button
          onClick={(event) => {
            deleteNote(event, id);
          }}
          className="px-3 py-1 bg-red-700 rounded text-white hover:bg-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteList;
