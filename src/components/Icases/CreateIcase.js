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
    const [iphoneSeries, setIphoneSeries] = useState();
    //count in stock
    const [qty, setQty] = useState();
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState();
    // const [arrival, setArrival] = useState();
    // const [color, setColor] = useState();
    
    // const [sale, setSale] = useState();
    
    // img: { type: String },
    // ratings: { type: String },

    const { userData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
            const newIcase = 
            { brand, descrp, price, discount, iphoneSeries, qty };
            await Axios.post(
                `http://localhost:3003/v1/i-cases/new`, 
                newIcase,
                {
                    headers: { "x-auth-token": userData.token }
                }
            );
            setLoading(false)
            history.push("/icases")  
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
                        type="number"
                        required
                        onChange={e => setPrice(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                <Form.Group controlId="firstName">
                    <Form.Label> Discount </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="From 1 - 100"
                        onChange={e => setDiscount(e.target.value)}
                    ></Form.Control>
                </Form.Group>             
                <Form.Group controlId="lastName">
                    <Form.Label> Quantity </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Count in Stock"
                        required
                        onChange={e => setQty(e.target.value)}
                    ></Form.Control>
                </Form.Group>       
                <Form.Group>
                    <Form.Label> Iphone Series </Form.Label> <br/>
                <select 
                    style = {{
                        outline: "none",
                        padding: "5px",
                        borderRadius: "15px",
                        background: "#f7fafd",
                        color: "#333"
                    }}
                    onChange={ e => setIphoneSeries(e.target.value) }
                > 
                    <option disabled> Select Series </option>
                    <option value="6-Series">6 Series</option>
                    <option value="7-Series">7 Series</option>
                    <option value="8-Series">8 Series</option>
                    <option value="X-Series">X Series</option>
                    <option value="11-Series">11 Series</option>
                    <option value="12-Series">12 Series</option>
                    <option value="Universal">Universal</option>
                </select>
                    
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