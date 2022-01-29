import React, { useReducer } from "react"
import AuthContext from "./authContext"
import AuthReducer from "./authReducer"
import axiosClient from "../../config/axios"

import { SUCCESSFUL_REGISTRATION, REGISTRATION_ERROR, CLEAN_ALERTS } from "../../types"


const AuthState = ({ children }) => {

    const initialState = {
        token: "",
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

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                registerUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState

