import React, { useReducer } from "react"
import AuthContext from "./authContext"
import AuthReducer from "./authReducer"
import axiosClient from "../../config/axios"
import authToken from "../../config/authToken"

import { SUCCESSFUL_REGISTRATION, REGISTRATION_ERROR, CLEAN_ALERTS, SUCCESSFUL_LOGIN, LOGIN_ERROR, AUTH_USER } from "../../types"


const AuthState = ({ children }) => {

    const initialState = {
        token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
        auth: null,
        user: null,
        message: {
            msg: null,
            status: null
        }
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const registerUser = async data => {
        try {
            const response = await axiosClient.post("/api/users/register", data)
            dispatch({
                type: SUCCESSFUL_REGISTRATION,
                payload: response.data.msg
            })
        } catch (error) {
            dispatch({
                type: REGISTRATION_ERROR,
                payload: error.response.data.errors[0].msg
            })
        }
        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERTS
            })
        }, 5000)
    }

    const loginUser = async data => {
        try {
            const response = await axiosClient.post("/api/users/login", data)
            dispatch({
                type: SUCCESSFUL_LOGIN,
                payload: response.data.token
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.errors[0].msg
            })
        }
        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERTS
            })
        }, 5000)
    }

    const getAuthUser = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            authToken(token)

            try {
                const response = await axiosClient.get("/api/users/auth")
                dispatch({
                    type: AUTH_USER,
                    payload: response.data.user
                })
            } catch (error) {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response.data
                })
                console.log(error.response.data)
            }
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                registerUser,
                loginUser,
                getAuthUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState

