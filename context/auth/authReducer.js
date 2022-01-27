import { SUCCESSFUL_REGISTRATION, REGISTRATION_ERROR, CLEAN_ALERTS } from "../../types"

const AuthReducer = (state, action) => {
    switch (action.type) {
        case SUCCESSFUL_REGISTRATION:
        case REGISTRATION_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case CLEAN_ALERTS:
            return {
                ...state,
                message: null
            }
        default:
            return state
    }
}

export default AuthReducer