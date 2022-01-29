import React, { useContext } from "react"
import AuthContext from "../context/auth/authContext"

export default function Alerts({ color }) {

    const authContext = useContext(AuthContext)
    const { message } = authContext

    return (
        <div className={`bg-${color}-400 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto`}>
            {message.msg}
        </div>
    )
}
