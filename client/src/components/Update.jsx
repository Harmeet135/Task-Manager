import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../redux/actions/actions";

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const task = useSelector((state) =>
    state.taskReducer.tasks.find((task) => task._id === id)
  );

  const [inpval, setInpval] = useState({
    title: "",
    description: "",
    status: "todo",
  });

  useEffect(() => {
    if (task) {
      setInpval(task);
    }
  }, [task]);

  const setdata = (e) => {
    const { name, value } = e.target;
    setInpval((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const updateTaskHandler = () => {
    if (!inpval.title || !inpval.description || !inpval.status) {
      alert("Please fill in all the fields.");
      return;
    }

    dispatch(updateTask(id, inpval));
    navigate("/");
  };

  if (!task) {
    return <div>Loading...</div>;
  }

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
          onClick={updateTaskHandler}
          type="button" 
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
