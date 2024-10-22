import "./App.css";
import AddNotes from "./pages/AddNotes";
//import Toaster in the root component, and then we can use it in any child component by using toast() function
import { Toaster } from "react-hot-toast";
import ViewNotes from "./pages/ViewNotes";
import { NoteProvider } from "./context/notes-context";

//create a function that returns sum of numbers from 1 to 100

function App() {
  return (
    <div>
      {/*add the Toaster component in the root component */}
      <Toaster />
      {/* wrapping all the children hierarchy in the NoteProvider so that all the children are able to acces the NotesContext data */}
      <NoteProvider>
        <ViewNotes />
        <AddNotes />
      </NoteProvider>
    </div>
  );
}

export default App;
