import {GET_USERS} from "../Type";

const initialState = {
    results: [],
    loading: true
}

export default function foo(state = initialState, action) {

    const { type, payload } = action;
    switch(type) {
        case GET_USERS:
            return {
                ...state,
                results: payload,
                loading: false
            }

            default: 
                return state;
    }
}