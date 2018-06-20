import { IS_CLICKED_LOG } from "../actions/types";

const initialState = {
    isClickedLog: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case IS_CLICKED_LOG:
            return {
                ...state,
                isClickedLog: action.payload
            };
        default:
            return state;
    }
}
