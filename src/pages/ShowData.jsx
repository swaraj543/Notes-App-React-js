import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowData = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl">Show Data</h1>
      {data.map((item) => {
        return (
          <div key={item.id} className="border p-2 mt-2">
            <h1 className="text-xl">{item.title}</h1>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowData;
