import React from "react";
import { useNotes } from "../context/notes-context";

const NoteHeading = () => {
  const { notes, setNotes } = useNotes();
  return (
    <div className="border-b p-3 text-center my-5">
      <h1 className="font-bold text-3xl">Here is list of Notes</h1>
      <p>You can add a new note by clicking on the button below</p>
      <p>Number of notes: {notes.length}</p>
    </div>
  );
};

export default NoteHeading;
