import Axios from "axios"

export const addNewIcase = (token) => 
    Axios.get (       
        `http://localhost:3003/v1/ringlights/new`,
        {
            headers: { "x-auth-token": token }
        }
    ).then(res => res.data)
        .catch(err => console.log(err))