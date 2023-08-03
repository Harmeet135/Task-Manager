import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inpval, setInpval] = useState({
    title: "",
    description: "",
    status: "todo",
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setInpval((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
 
  const createTaskHandler = () => {
    dispatch(createTask(inpval));
    navigate("/");
  };

  return (
    <div className="container mx-auto py-10">
    <form className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="exampleInputTitle" className="block text-lg font-bold mb-1">
            Title
          </label>
          <input
            type="text"
            value={inpval.title}
            onChange={setdata}
            name="title"
            className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="exampleInputTitle"
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputDescription" className="block text-lg font-bold mb-1">
            Description
          </label>
          <input
            type="text"
            value={inpval.description}
            onChange={setdata}
            name="description"
            className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="exampleInputDescription"
          />
        </div>
      
          <div className="mb-4">
            <label htmlFor="exampleInputStatus" className="block text-lg font-bold mb-1">
              Status
            </label>
            <select
              value={inpval.status}
              onChange={setdata}
              name="status"
              className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="exampleInputStatus"
            >
              <option value="todo">Todo</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
          <button
        onClick={createTaskHandler}
          type="submit"
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
