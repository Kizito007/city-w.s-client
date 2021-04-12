import React, { useState, useContext, useEffect } from "react"
import UserContext from "../context/UserContext"
import { useHistory, Link } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import Spinner from "../Misc/Spinner"
import FormContainer from "./FormContainer"
// import "./auth.css"
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
            history.push("/")
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg); 
        }
    }
    return (
        <FormContainer>
            <h3 style={{ padding: '1rem' }}>Sign In</h3>
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
                {
                    isLoading ?
                    <>
                        <span> <Spinner/> </span> <br/>
                    </> : null
                }
                <Button type="submit" variant="secondary">
                    Login
                </Button>
                <Row className="py-3">
                    <Col>
                        New Customer? {" "}
                        <Link className="reg-link" to="/register">Register</Link>
                    </Col>
                </Row>
            </Form> <br/>
            
        </FormContainer>
    )
}