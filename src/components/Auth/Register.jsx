import React, { useState, useContext } from "react"
import UserContext from "../context/UserContext"
import { useHistory } from "react-router-dom"
import Spinner from "../Misc/Spinner"
import "./auth.css"
// import PhoneInput from "react-phone-number-input"
import Axios from "axios"
import ErrorNotice from "../Misc/ErrorNotice"

export default function Register () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState();
    // const [cell_no, setMobileNumber] = useState();
    const [isLoading, setLoading] = useState(false)

    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const newUser = 
            {email, password, passwordCheck, firstName, lastName, gender};
            // if (password !== passwordCheck)  cell_no,
            //     return alert("Password doesn't match.")
            await Axios.post(
                "http://localhost:3003/v1/users/register", 
                newUser,
            );
            const loginRes = await Axios.post(
                "http://localhost:3003/v1/users/login", {
                email,
                password,  
            });
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
            <h2 style={{ padding: '1rem' }}>Register</h2>
            {
                error && <ErrorNotice message={error} clearError={() => setError(undefined)} />
            }
            <form className="form" onSubmit={submit}>
                <label htmlFor="register-email">Email </label>
                <input 
                    id="register-email" 
                    type="email" 
                    required
                    onChange={e => setEmail(e.target.value)} 
                />

                <label htmlFor="register-password">Password </label>
                <input 
                    id="register-password" 
                    type="password" 
                    required
                    placeholder= "5 characters min."
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    placeholder="Verify Password" 
                    type="password" 
                    required
                    onChange={e => setPasswordCheck(e.target.value)} 
                />

                <label htmlFor="register-firstName">First Name </label>
                <input 
                    id="register-firstName" 
                    type="text" 
                    required
                    onChange={e => setFirstName(e.target.value)} 
                />
                <label htmlFor="register-lastName">Last Name </label>
                <input 
                    id="register-lastName" 
                    type="text" 
                    required
                    onChange={e => setLastName(e.target.value)} 
                />
                {/* <PhoneInput 
                    defaultCountry="NG"
                    value={cell_no} 
                    placeholder="Enter mobile number"
                    onChange={setMobileNumber} 
                /> */}
                <label htmlFor="gender">Gender </label>
                <input 
                    id="gender" 
                    type="text" 
                    onChange={e => setGender(e.target.value)} 
                />
                {
                    isLoading ?
                    <>
                        <span> <Spinner/> </span> <br/>
                    </> : null
                }
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}