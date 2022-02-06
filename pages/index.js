import React, { useContext, useEffect } from "react"
import AuthContext from "../context/auth/authContext"

export default function Home() {

  const authContext = useContext(AuthContext)
  const { getAuthUser } = authContext

  useEffect(() => {
    getAuthUser()
  }, [getAuthUser])

  return (
    <div>
      <h1>Index</h1>
    </div>
  )
}
