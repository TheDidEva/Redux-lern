const defaultState = {
    users: []
}

export const SET_USER = "SET_USER";
export const FETCH_USER = "FETCH_USER";

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, users: action.payload }
        default:
            return state;
    }
}

export const setUsers = payload => ({ type: SET_USER, payload });
export const fetchtUsers = () => ({ type: FETCH_USER });