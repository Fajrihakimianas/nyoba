import {GET_USERS, USERS_ERROR} from "../Type";
import axios from 'axios';

export const getUsers = () => async dispatch => {

    try {
        const res = await axios.get(`https://randomuser.me/api/`)
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}