import { AUTH_USER } from "../../types"

const AuthReducer = (state, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer