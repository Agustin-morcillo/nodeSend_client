import { SUCCESSFUL_REGISTRATION, REGISTRATION_ERROR, CLEAN_ALERTS } from "../../types"

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
            return {
                ...state,
                message: {
                    msg: action.payload,
                    status: 400
                }
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