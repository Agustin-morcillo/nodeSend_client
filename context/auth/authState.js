import React, { useReducer } from "react"
import AuthContext from "./authContext"
import AuthReducer from "./authReducer"

const AuthState = ({ children }) => {

    const initialState = {
        token: "",
        auth: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState

