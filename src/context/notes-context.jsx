import { createContext } from "react";
import { useContext, useState } from "react";
//1.create context
//Context: A way to share data between components, without having to pass data through props
const NotesContext = createContext();

//2.create provider
//Provider: A component that provides the data to the child components(consumer) by using the context
export const NoteProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notes, setNotes] = useState([]);
  return (
    <NotesContext.Provider
      value={{
        notes: notes,
        setNotes: setNotes,
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
      }}
    >
      {/* we can use object destructure like {notes, setNotes }  */}
      {children}
    </NotesContext.Provider>
  );
};

//3.create a function that returns the context
export const useNotes = () => {
  return useContext(NotesContext);
};
