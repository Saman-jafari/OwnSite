import { GET_TOKEN, TOKEN_REMOVER } from "../actions/types";

const initialState = {
    token: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case TOKEN_REMOVER:
            return {
                ...state,
                token: null
            };
        default:
            return state;
    }
}
