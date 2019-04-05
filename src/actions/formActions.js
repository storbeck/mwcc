export const OPEN_FORM_SUCCESS = "OPEN_FORM_SUCCESS";
export const CLOSE_FORM_SUCCESS = "CLOSE_FORM_SUCCESS";

export const openFormSuccess = () => ({
    type: OPEN_FORM_SUCCESS,
    payload: { open: true }
})

export const closeFormSuccess = () => ({
    type: CLOSE_FORM_SUCCESS,
    payload: { open: false }
})

export function openForm() {
    return dispatch => {
        return dispatch(openFormSuccess());
    }
}


export function closeForm() {
    return dispatch => {
        return dispatch(closeFormSuccess());
    }
}