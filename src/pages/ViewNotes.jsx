import React from "react";
import { useNotes } from "../context/notes-context";
import NoteHeading from "../components/NoteHeading";
import NoteList from "../components/NoteList";

const ViewNotes = () => {
  const { notes, setNotes } = useNotes();
  return (
    <div>
      <NoteHeading />
      {notes.map((note, index) => (
        <NoteList key={index} title={note.title} date={note.date} id={note.id} />
      ))}
      {notes.length <= 0 ? <h1 className="text-4xl text-center">No notes Available</h1>:""}
    </div>
  );
};

export default ViewNotes;
