import { CREATE_TASK , DELETE_TASK, UPDATE_TASK , GET_TASKS ,GET_DETAILS , SEARCH_TASK} from "../actions/actionTypes";

const initialState = {
    tasks : []
};

const taskReducer = (state = initialState , action) => {
    switch (action.type) {
        case CREATE_TASK:
            return {
              ...state,
              tasks: [...state.tasks, action.payload],
            };
          case GET_TASKS:
            return {
              ...state,
              tasks: action.payload,
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((data) => data._id !== action.payload),
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((data) =>
                data._id === action.payload._id ? action.payload : data
                ),
            };
        case GET_DETAILS:
            return {
                ...state,
                tasks: action.payload,
            };
        case SEARCH_TASK:
            return {
                ...state,
                tasks: action.payload,
            };
            default:
                return state;
            }
};

export default taskReducer;