import React from "react"
import { Row, Col,Card } from "react-bootstrap"
import products from "../products"
import "../Misc/misc.css"

const RinglightList = () => {
    return (
        <>
        <h1 style={{ marginLeft: "30px", paddingTop: "15px" }}> Ringlights </h1>
        <Row style={{ margin: "0 15px" }}>
            {
                products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card className="my-3 p-3 rounded">
                            <a href={`/product/${product._id}`}>
                                <Card.Img src={product.image} variant="top" />
                            </a>
                            <Card.Body>
                                <a href={`/product/${product._id}`}>
                                    <Card.Title as="div"><strong> {product.name} </strong></Card.Title>
                                </a>
                                <Card.Text as="div">
                                    <div className="my-3" style={{ color: "#29292B" }}>
                                        {product.rating} from {product.numReviews} reviews
                                    </div>
                                </Card.Text>
                                <Card.Text as="h5" style={{ color: "#29292B" }}>
                                    ${product.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            } 
        </Row>
        </>
    )
}

export default RinglightList;