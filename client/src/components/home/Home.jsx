import { Link } from "react-router-dom";
import { HiUserAdd } from "react-icons/hi";
import Todolist from "../todos/Todolist";
import { useDispatch } from "react-redux";
import { searchTask } from "../../redux/actions/actions";

const Home = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const { value } = e.target;
    dispatch(searchTask(value)); 
    console.log(value);
  };

  return (
    <>
      <div>
        <div className="flex justify-center my-8 items-center gap-4">
          <div className="relative border-2 border-gray-400 rounded-lg shadow-md ">
            <input
              type="text"
              className="py-2 px-4 sm:pr-80  pr-32 border-none rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search Task"
              onChange={handleSearch}
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 flex items-center"></div>
          </div>
            <Link to={"/register"}>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-full h-[40px]"
              >
                <HiUserAdd />
              </button>
            </Link>
        </div>

        <div>
          <Todolist/>
        </div>
      </div>
    </>
  );
};

export default Home;
