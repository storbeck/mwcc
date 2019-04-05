import { SET_TAB_SUCCESS } from "../actions/tabActions";

const initialState = {
    active: 0
};

export default function tabReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TAB_SUCCESS:
            return { active: action.payload }

        default:
            return state;
    }
}
