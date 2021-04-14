import React, { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import UserContext from "../context/UserContext"
import { useHistory } from "react-router-dom"
import Spinner from "../Misc/Spinner"
// import "./auth.css"
import FormContainer from "../Auth/FormContainer"
import Axios from "axios"
import ErrorNotice from "../Misc/ErrorNotice"

export default function CreateIcase () {

    const [descrp, setDescrp] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const [discount, setDiscount] = useState();
    const [arrival, setArrival] = useState();
    // const [color, setColor] = useState();
    const [qty, setQty] = useState();
    // const [sale, setSale] = useState();
    const [isLoading, setLoading] = useState(false)
    // img: { type: String },
    // ratings: { type: String },
    // color: { type: String },
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            // const newIcase = 
            // {descrp, brand, price, discount, qty};
            
            // await Axios.post(
            //     "http://localhost:3003/v1/users/register", 
            //     newUser,
            // );
            // const loginRes = await Axios.post(
            //     "http://localhost:3003/v1/users/login", {
            //     email,
            //     password,  
            // });
            // setUserData({
            //     token: loginRes.data.token,
            //     user: loginRes.data.vendor,
            // });
            setLoading(false)
            // localStorage.setItem("auth-token", loginRes.data.token)
            history.push("/profile")  
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg); 
        }
    }

    return (
        <FormContainer>
            <h3 style={{ padding: '1rem' }}>New Iphone Case</h3>
            {
                error && <ErrorNotice message={error} clearError={() => setError(undefined)} />
            }
            <Form onSubmit={submit} style={{height: "100vh"}}>
                <Form.Group controlId="email">
                    <Form.Label> Description </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="describe..."
                        onChange={e => setDescrp(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label> Brand </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Brand Name"
                        onChange={e => setBrand(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                <Form.Group controlId="passwordCheck">
                    <Form.Label> Price </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        onChange={e => setPrice(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                <Form.Group controlId="firstName">
                    <Form.Label> Discount </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="From 1 - 100"
                        required
                        onChange={e => setDiscount(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                <Form.Group controlId="lastName">
                    <Form.Label> Quantity </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Doe"
                        required
                        onChange={e => setQty(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                {
                    isLoading ?
                    <>
                        <span> <Spinner/> </span> <br/>
                    </> : null
                }
                <Button type="submit" variant="secondary">
                    Submit
                </Button>
            </Form>
        </FormContainer>
    )
}