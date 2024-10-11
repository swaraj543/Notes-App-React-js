import React, { useState } from "react";

const AddNotes = () => {
  const [status, setStatus] = useState([
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
  ]);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    statusId: 0,
    date: "",
    error: false,
    errorData: null,
  });

  function handleForm(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target.title.value);
  }

  return (
    <div className="flex justify-center flex-col items-center mt-10 md:mt-20">
      <h1 className="text-3xl">Add Notes</h1>
      <p>This is where you can add notes</p>
      <p>you can also edit and delete notes here</p>
      <form
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the note title here"
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
          >
            <option>Choose a note status</option>
            {status.map((stat) => (
              <option key={stat.id} value={stat.id}>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
