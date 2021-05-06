import axios from "axios";
import {returnErrors}from "./errorActions";
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
  } from './types';

export const login = ({email, password}) => dispatch =>{
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    const body = JSON.stringify({email, password});
    axios
    .post("http://localhost:5000/api/auth", body, config)
    .then(res => {
        dispatch({
        type: LOGIN_SUCCESS,
        payload:res.data
    })
    })
    .catch(err => {
        //dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
        dispatch({
            type: LOGIN_FAIL
        });
    });
};

  //Vérifer le token et charger l'utilisateur
export const loadUser = ()=> (dispatch, getState)=>{
    // User loading
    dispatch({type:USER_LOADING});

    //Get Token from localstorage
    const token = getState().auth.token;

    //Header
    const config = {
        headers:{
            "content-type":"application/json"
        }
    }

    if(token){
        config.headers["x-auth-token"] = token;

    }
    axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload : res.data
    }))
    .catch(err=>{
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });

    });
};

export const tokenConfig = getState => {
    const token =  getState().auth.token;
    const config = {
        headers:{
            'Content-type' : "application/json"
        }
    };
    if(token){
        config.headers["x-auth-token"] = token;
    }
    return config;
}