import {
    SUCCESSFUL_REGISTRATION,
    REGISTRATION_ERROR,
    SUCCESSFUL_LOGIN,
    LOGIN_ERROR,
    AUTH_USER,
    CLEAN_ALERTS
} from "../../types"

const AuthReducer = (state, action) => {
    switch (action.type) {
        case SUCCESSFUL_REGISTRATION:
            return {
                ...state,
                message: {
                    msg: action.payload,
                    status: 200
                }
            }
        case REGISTRATION_ERROR:
        case LOGIN_ERROR:
            return {
                ...state,
                message: {
                    msg: action.payload,
                    status: 400
                }
            }
        case SUCCESSFUL_LOGIN:
            localStorage.setItem("token", action.payload)
            return {
                ...state,
                token: action.payload,
                auth: true
            }
        case AUTH_USER:
            return {
                ...state,
                user: action.payload
            }
        case CLEAN_ALERTS:
            return {
                ...state,
                message: {
                    msg: null,
                    status: null
                }
            }
        default:
            return state
    }
}

export default AuthReducer