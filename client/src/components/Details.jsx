import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { getDetails, deleteTask } from "../redux/actions/actions"; 

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const taskData = useSelector((state) =>
    state.taskReducer.tasks.find((task) => task._id === id)
  );

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const deleteTaskHandler = () => {
    dispatch(deleteTask(id));
    navigate("/"); 
  };

  return (
    <div className="container mt-3">
      <h1 className="font-semibold text-2xl">{taskData.title}'s Task Details</h1>

      <div className="max-w-md mx-auto mt-8 bg-white border rounded-lg shadow-md">
        <div className="px-4 py-3 border-b">
          <div className="flex justify-end">
            <button
              onClick={deleteTaskHandler}
              className="text-red-600 hover:text-red-800"
            >
              <AiFillDelete />
            </button>
            <Link to={`/update/${id}`}>
            <button
            
            className="ml-2 text-blue-600 hover:text-blue-800">
              <BsFillPencilFill />
            </button>
            </Link>
          </div>
        </div>
        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mt-2">Title:</h3>
          <p className="text-gray-700">{taskData.title}</p>
        </div>
        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mt-2">Description:</h3>
          <p className="text-gray-700">{taskData.description}</p>
        </div>
        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mt-2">Status:</h3>
          <p className="text-gray-700">{taskData.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
