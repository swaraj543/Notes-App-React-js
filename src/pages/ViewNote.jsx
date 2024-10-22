import React from "react";
import { useParams } from "react-router-dom";
import { useNotes } from "../context/notes-context";
import { noteStatus } from "../helper/helper";

const ViewNote = () => {
  const { noteId, noteTitle } = useParams();
  const { notes, setNotes } = useNotes();
  console.log(notes);
  const note = notes.find((note) => note.id === parseInt(noteId));
  console.log(note.id);
  console.log(noteId);
  return (
    <div className="flex justify-center my-10 w-full">
      <div className="border rounded p-10 shadow flex flex-col gap-3">
        <h1 className="font-semibold text-4xl ">{note.title}</h1>
        <p>{note.content}</p>
        Date: {note.date}
        <div className="flex gap-5 justify-end">
          <p>
            Status: <span className="font-bold">{noteStatus[note.statusId]}</span>
          </p>
          <p>Note ID: {note.id}</p>
        </div>
        <div className="flex justify-center gap-3">
          <button className="px-3 py-1 bg-yellow-700 rounded text-white hover:bg-yellow-800">
            Update
          </button>
          <button className="px-3 py-1 bg-red-700 rounded text-white hover:bg-red-800">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
