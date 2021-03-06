import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./auth.css"

const FormContainer = ({ children }) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={7} className="colo"> 
                    {children}
                </Col>
            </Row> 
        </Container>
    )
}

export default FormContainer