import React, { useState, useContext, useEffect } from "react"
import UserContext from "../context/UserContext"
import { useHistory, Link } from "react-router-dom"
import Spinner from "../Misc/Spinner"
import "./auth.css"
import Axios from "axios"
import ErrorNotice from "../Misc/ErrorNotice"

export default function Login () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState();

    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => { 
        if (userData.user) history.push(`/register`)
    })

    const submit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const loginUser = { email, password };
            const loginRes = await Axios.post(
                "http://localhost:3003/v1/users/login",
                loginUser 
            );
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.vendor,
            });
            setLoading(false)
            localStorage.setItem("auth-token", loginRes.data.token)
            history.push("/profile")
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg); 
        }
    }
    return (
        <div className="page">
            <h2 style={{ padding: '1rem' }}>Login</h2>
            {
                error && <ErrorNotice message={error} clearError={() => setError(undefined)} />
            }
            <form className="form" onSubmit={submit} style={{height: "100vh"}}>
                <label htmlFor="login-email">Email: </label>
                <input 
                    id="login-email" 
                    type="email" 
                    onChange={e => setEmail(e.target.value)} 
                />

                <label htmlFor="login-password">Password: </label>
                <input 
                    id="login-password" 
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                />
                {
                    isLoading ?
                    <>
                        <span> <Spinner/> </span> <br/>
                    </> : null
                }
                <input type="submit" value="Log In" /> 
              <div> <br/> <br/>
                <p style={{ fontSize: "18px" }} >Don't have an account?</p>
                <p> <Link className="reg-link"to="/register">Sign Up</Link> </p>
            </div>  
            </form> <br/>
            
        </div>
    )
}