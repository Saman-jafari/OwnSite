import { IS_CLICKED_LOG } from "./types";

export const is_clickedLog = which => dispatch => {
    dispatch({
        type: IS_CLICKED_LOG,
        payload: which
    });
};