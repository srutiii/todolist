"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [des, setDes] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (task == "") {
      alert("Task field is empty...");
      return
    } else {
      setMainTask([...mainTask, { task, des }]);
      // console.log(task, des);
      setTask("");
      setDes("");
    }
  };

  // let renderTask = <h2>No task available...</h2>;
  // if (mainTask.length > 0) {
  //   renderTask = mainTask.map((t, i) => {
  //     return (
  //       <li>
  //         <div>
  //           <h2>{t.task}</h2>
  //           <p>{t.des}</p>
  //         </div>
  //       </li>
  //     );
  //   });
  // }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  return (
    <div className="">
      <div className="text-6xl flex justify-center items-center p-5 bg-emerald-900 text-white shadow-md shadow-gray-400">
        <h1>My Todo List</h1>
      </div>
      <div className="flex justify-center items-center">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter your task..."
            className="px-6 py-3 border-2 border-emerald-900 rounded m-5 focus:outline-none font-medium text-emerald-700"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description..."
            className="px-6 py-3 border-2 border-emerald-900 rounded m-5 focus:outline-none font-medium text-emerald-700"
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
            }}
          />
          <button className="px-5 py-2 bg-emerald-900 text-white font-medium rounded shadow-lg shadow-gray-400 hover:bg-emerald-800">
            Add Task
          </button>
        </form>
      </div>
      <div className=" p-6 text-white font font-medium grid grid-cols-4 gap-2">
        {mainTask.length > 0 ? (
          mainTask.map((t, i) => (
            <div
              key={i}
              className="w-[300px] h-[200px] bg-gradient-to-br from-emerald-900  to-emerald-700 rounded shadow-lg shadow-gray-600 flex flex-col items-center p-5 m-3 relative"
            >
              <h1 className="text-xl text-gray-200 font-semibold capitalize">
                {t.task}
              </h1>

              <p className="mt-2 text-sm text-gray-300 text-justify">{t.des}</p>
              <div className="absolute bottom-2 ">
                <button
                  onClick={() => {
                    deleteHandler(i);
                  }}
                  className="bg-red-400 px-5 py-2 justify-end rounded-md font-medium "
                >
                  {" "}
                  Delete{" "}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-4xl text-emerald-900 justify-center">
              Add task...
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
