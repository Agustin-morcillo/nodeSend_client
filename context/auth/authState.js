import React, { useReducer } from "react"
import AuthContext from "./authContext"
import AuthReducer from "./authReducer"

import { AUTH_USER } from "../../types"

const AuthState = ({ children }) => {

    const initialState = {
        token: "",
        auth: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const authUser = name => {
        dispatch({
            type: AUTH_USER,
            payload: name
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                authUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState

