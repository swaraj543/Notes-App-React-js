import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNotes } from "../context/notes-context";

const AddNotes = () => {
  // const [notes, setNotes] = useState([]); since we are using the context, we do not need this line
  const { notes, setNotes } = useNotes();
  const [status, setStatus] = useState([
    {
      id: -1,
      value: "Choose a note status",
    },
    {
      id: 0,
      value: "New",
    },
    {
      id: 1,
      value: "In Progress",
    },
    {
      id: 2,
      value: "Completed",
    },
    {
      id: 3,
      value: "On Hold",
    },
    {
      id: 4,
      value: "Cancelled",
    },
    {
      id: 5,
      value: "Rejected",
    },
    {
      id: 6,
      value: "Done",
    },
  ]);

  const [formData, setFormData] = useState({
    id:-1,
    title: "",
    content: "",
    statusId: -1,
    date: "",
    error: false,
    errorData: null,
  });

  function handleForm(event) {
    event.preventDefault();
    //console.log(event);
    // console.log(event.target.title.value);
    // console.log(event.target.content.value);
    // console.log(event.target.status.value);
    // console.log(event.target.date.value);

    //now we also get the data fron the formData object, we can use this data to send to the server
    //console.log(formData);
    //validations
    if (formData.title === "") {
      toast.error("Title is required");
      //we are returning from the function, so that the code below this line does not execute
      return;
    }
    //we can use regex to validate the date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(formData.date)) {
      toast.error("Invalid date format");
      return;
    }
    const noteId = Math.round(Math.random()*1000000);//in production, we should use the id from the server or there is package called uuid to generate unique ids
    const updatedFormData = {...formData,id:noteId};
    setNotes([...notes, updatedFormData]);
    console.log(formData);
    console.log(notes);
    //we can also use the third party libraries like react hook form, moment.js for validations
    toast.success("Note added successfully");
  }
  //value change
  function handleValueChange(event) {
    // console.log(event);
    // console.log(event.target.name);
    setFormData({
      ...formData,
      //title: event.target.value
      //we should make the above key dynamic, as we are using the same function for all the fields
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div className="flex justify-center flex-col items-center mt-10 md:mt-20">
      <h1 className="text-3xl">Add Notes</h1>
      <p>This is where you can add notes</p>
      <p>you can also edit and delete notes here</p>
      <form
        noValidate //this will disable the default browser validation
        onSubmit={handleForm}
        className="w-full md:w-1/3 flex flex-col gap-3"
      >
        {/* title field */}
        <div className="feild_container">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the note title here"
            onChange={handleValueChange}
            value={formData.title}
            required
          />
        </div>
        {/* content field */}
        <div className="field_container">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Note
          </label>
          <textarea
            id="content"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your content here..."
            name="content"
            onChange={handleValueChange}
            value={formData.content}
          ></textarea>
        </div>
        {/* status field */}
        <div className="field_container">
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the note status
          </label>
          <select
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="statusId"
            onChange={handleValueChange}
            value={formData.statusId}
          >
            {status.map((stat) => (
              <option
                disabled={stat.id == -1 ? true : false}
                key={stat.id}
                value={stat.id}
              >
                {stat.value}
              </option>
            ))}
          </select>
        </div>

        <div className="feild_container">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleValueChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.date}
            required
          />
        </div>
        <div className="field_container flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Note
          </button>
          <button
            type="button"
            onClick={() => {
              setFormData({
                title: "",
                content: "",
                statusId: -1,
                date: "",
              });
            }}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Clear Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
