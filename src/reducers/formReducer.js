import { OPEN_FORM_SUCCESS, CLOSE_FORM_SUCCESS } from "../actions/formActions";

const initialState = {
    open: false
};

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_FORM_SUCCESS:
            return { open: action.payload.open }

        case CLOSE_FORM_SUCCESS:
            return { open: action.payload.open }

        default:
            return state;
    }
}
