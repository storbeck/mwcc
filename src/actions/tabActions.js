export const SET_TAB_SUCCESS = "SET_TAB_SUCCESS";

export const setTabSuccess = (tab) => ({
    type: SET_TAB_SUCCESS,
    payload: tab
})

export function setTab(tab) {
    return dispatch => {
        return dispatch(setTabSuccess(tab));
    }
}
