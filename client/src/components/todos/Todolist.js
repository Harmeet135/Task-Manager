import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getTasks, deleteTask, updateTask } from "../..//redux/actions/actions";

const Todolist = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer.tasks);
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id));
  };

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateTask(id, { status: newStatus }));
  };

  const activeTasks = tasks.filter((data) => data.status !== "completed");
  const completedTasks = tasks.filter((data) => data.status === "completed");

  return (
    <div className="py-10">
      <div className="md:grid grid-cols-2 xl:gap-40  lg:w-4/5 md:w-[85]  justify-items-stretch m-auto sm:w-[90%] sm:gap-4 ">
        <div className="">
          <div className="text-2xl border-b border-solid border-blue-600 pb-2 px-2 mb-10">
            Active Tasks
          </div>

          {activeTasks?.map((data, id) => (
            <div key={id} className="border mt-2 mb-5 mx-4 border-l-0">
              <div className="border-l-4 border-blue-500 rounded-r-md px-2 xl:px-8 py-2 bg-[#f0f8ff] rounded-md shadow-md">
                <div className="px-2">
                  <div className="py-2 flex justify-between">
                    {data.title}
                    <Link to={`/view/${data._id}`}>
                      <button
                        type="button"
                        className="items-center space-x-1 px-3 py-2 border-1 border-solid text-black border-blue-500 rounded-md font-bold hover:bg-blue-500"
                      >
                        <AiOutlineEye />
                      </button>
                    </Link>
                  </div>
                  <p className="pb-3">{data.description}</p>
                </div>

                <div className="flex justify-between px-2 xl:px-4 py-2">
                  <Link to={`/update/${data._id}`}>
                    <button
                      type="button"
                      className="items-center space-x-1 px-3 py-2 border-1 border-solid border-green-500 rounded-md font-bold hover:bg-green-500"
                    >
                      <BsFillPencilFill />
                    </button>
                  </Link>

                  <select
                    value={data.status}
                    onChange={(e) =>
                      handleStatusChange(data._id, e.target.value)
                    }
                    name="status"
                    className="text-sm px-2 py-1 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="exampleInputStatus"
                  >
                    <option value="todo">Todo</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                  <button
                    onClick={() => deleteTaskHandler(data._id)}
                    type="button"
                    className="items-center space-x-1 px-3 py-2 border-1 border-solid border-red-500 text-black rounded-md font-bold hover:bg-red-500 hover:text-white"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-2xl border-b border-solid border-blue-600 pb-2 px-2 mb-10">
            Completed Tasks{" "}
          </div>
          {completedTasks.map((data, id) => (
            <div key={id} className="border mt-2 mb-5 mx-4 border-l-0">
              <div className="border-l-4 border-red-500 rounded-r-md px-2 xl:px-8 py-2 bg-[#fff5e7] rounded-md shadow-md">
                <div className="px-2">
                  <div className="py-2 flex justify-between">
                    {data.title}
                    <Link to={`/view/${data._id}`}>
                      <button
                        type="button"
                        className="items-center space-x-1 px-3 py-2 border-1 border-solid text-black border-blue-500 rounded-md font-bold hover:bg-blue-500"
                      >
                        <AiOutlineEye />
                      </button>
                    </Link>
                  </div>
                  <p className="pb-3">{data.description}</p>
                </div>

                <div className="flex justify-between px-2 xl:px-4 py-2">
                  <Link to={`/update/${data._id}`}>
                    <button
                      type="button"
                      className="items-center space-x-1 px-3 py-2 border-1 border-solid border-green-500 rounded-md font-bold hover:bg-green-500"
                    >
                      <BsFillPencilFill />
                    </button>
                  </Link>

                  <select
                    value={data.status}
                    onChange={(e) =>
                      handleStatusChange(data._id, e.target.value)
                    }
                    name="status"
                    className="text-sm px-2 py-1 rounded-md bg-green-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="exampleInputStatus"
                  >
                    <option value="todo">Todo</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>

                  <button
                    onClick={() => deleteTaskHandler(data._id)}
                    type="button"
                    className="items-center space-x-1 px-3 py-2 border-1 border-solid border-red-500 text-black rounded-md font-bold hover:bg-red-500 hover:text-white"
                  >
                    <AiFillDelete />
                  </button>

                  {/* <Link to={`/view/${data._id}`}>
                    <button
                      type="button"
                      className="items-center space-x-1 px-3 py-2 border-1 border-solid text-black border-blue-500 rounded-md font-bold hover:bg-blue-500"
                    >
                      <AiOutlineEye />
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
