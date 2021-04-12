import React, { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import UserContext from "../context/UserContext"
import { useHistory } from "react-router-dom"
import Spinner from "../Misc/Spinner"
import "./auth.css"
import FormContainer from "./FormContainer"
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
            history.push("/")  
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg); 
        }
    }

    return (
        <FormContainer>
            <h3 style={{ padding: '1rem' }}>Sign Up</h3>
            {
                error && <ErrorNotice message={error} clearError={() => setError(undefined)} />
            }
            <Form onSubmit={submit} style={{height: "100vh"}}>
                <Form.Group controlId="email">
                    <Form.Label> Email Address </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label> Password </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        onChange={e => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                <Form.Group controlId="passwordCheck">
                    <Form.Label> Verify Password </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        required
                        onChange={e => setPasswordCheck(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                <Form.Group controlId="firstName">
                    <Form.Label> First Name </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John"
                        required
                        onChange={e => setFirstName(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                <Form.Group controlId="lastName">
                    <Form.Label> Last Name </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Doe"
                        required
                        onChange={e => setLastName(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                <Form.Group controlId="gender">
                    <Form.Label> Gender </Form.Label>
                    <Form.Control
                        type="text"
                        // placeholder=""
                        onChange={e => setGender(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                {
                    isLoading ?
                    <>
                        <span> <Spinner/> </span> <br/>
                    </> : null
                }
                <Button type="submit" variant="secondary">
                    Sign Up
                </Button>
            </Form>
        </FormContainer>
    )
}