import axiosClient from "./axios"

const authToken = (token) => {
    if (token) {
        return (axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`)
    }
    return delete axiosClient.defaults.headers.common["Authorization"]
}

export default authToken