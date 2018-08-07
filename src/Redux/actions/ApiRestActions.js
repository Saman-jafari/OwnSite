/* eslint-disable array-callback-return */
import { GET_TOKEN, TOKEN_REMOVER } from "./types";
import axios from "axios";
import AppEnv from "/AppEnv/AppEnv";

let apiBaseUrl = AppEnv;

export const fetchToken = payload => dispatch => {
    return new Promise((resolve, reject) => {
        axios
            .post(apiBaseUrl, payload)
            .then(response => {
                if (response.status === 200) {
                    //do somthing here
                    dispatch({
                        type: GET_TOKEN,
                        payload: payload
                    });
                }
            })
            .catch(function(error) {
                reject(error);
            });
    });
};

export const Token_Remove = () => dispatch => {
    dispatch({
        type: TOKEN_REMOVER,
        payload: null
    });
};
