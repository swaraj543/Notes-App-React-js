import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { NoteProvider } from "./context/notes-context.jsx";
import { Toaster } from "react-hot-toast";
import AddNotes from "./pages/AddNotes.jsx";
import ViewNotes from "./pages/ViewNotes.jsx";
import Root from "./pages/Root.jsx";
import ViewNote from "./pages/ViewNote.jsx";
import Home from "./pages/Home.jsx";
import ShowData from "./pages/ShowData.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>This is Error page</h1>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/add-notes",
        element: <ProtectedRoute element={AddNotes} />,
      },
      {
        path: "/view-notes",
        element: <ProtectedRoute element={ViewNotes} />,
      },
      {
        path: "/note/:noteId/:noteTitle",
        element: <ProtectedRoute element={ViewNote} />,
      },
      {
        path: "/data",
        element: <ProtectedRoute element={ShowData} />,
        // this loaded can be fetched from an api and made available to the component using useLoader hook
        loader: async (request,params) => {
          //request and params are passed to the loader function we can use them to fetch data
          //params is an object that contains the dynamic params of the url
          //request has the fetch api
          //read more about fetch api here https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
          //read more about params here https://reactrouter.com/docs/en/v6/api#params
        const result = await fetch('https://jsonplaceholder.typicode.com/posts');
        return result;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* we commented out App since we are using react router */}
    <NoteProvider>
      <Toaster />
      <div className="p-5">
        <RouterProvider router={router} />
      </div>
    </NoteProvider>
  </StrictMode>
);
