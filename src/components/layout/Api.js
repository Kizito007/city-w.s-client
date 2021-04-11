import Axios from "axios"

export const getUserProfile = (token) => 
    Axios.get (       
        `http://localhost:3003/v1/users`,
        {
            headers: { "x-auth-token": token }
        }
    ).then(res => res.data)
        .catch(err => console.log(err))