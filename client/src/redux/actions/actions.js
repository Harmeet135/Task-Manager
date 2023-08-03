import { CREATE_TASK , DELETE_TASK , UPDATE_TASK , GET_TASKS , GET_DETAILS, SEARCH_TASK} from "./actionTypes";
import axios from 'axios';
import * as api from '../api.js';

export const createTask = (task) => async (dispatch) => {
    try {
        const res = await api.createTask(task);
        dispatch({type: CREATE_TASK , payload: res.data});
    } catch (error) {
        console.log("error crateing task ",error);
    }
};

export const getTasks = () => async (dispatch) => {
    try {
        const res = await api.getTasks();
        dispatch({type: GET_TASKS , payload: res.data});
    } catch (error) {
        console.log("error getting tasks ",error);
    }
};

export const deleteTask = (id) => async (dispatch) => {
    try {
        await api.deleteTask(id);
        dispatch({type: DELETE_TASK , payload: id});
    } catch (error) {
        console.log("error deleting task ",error);
    }
};

export const updateTask = (id , task) => async (dispatch) => {
    try {
        const res = await api.updateTask(id , task);
        dispatch({type: UPDATE_TASK , payload: res.data});
    } catch (error) {
        console.log("error updating task ",error);
    }
};

export const getDetails = (id) => async (dispatch) => {
    try {
          const res = await api.getDetails(id);
            dispatch({type: GET_DETAILS , payload: res.data});   
    } catch (error) {
        console.log("error getting details ",error);
    }
};

export const searchTask = (key) => async (dispatch) => {
    try {
        if (key.trim() === '') {
            dispatch(getTasks());
          } else {
        const res = await api.searchTask(key);
        dispatch({type: SEARCH_TASK , payload: res.data});
    } 
}catch (error) {
        
    }
};
