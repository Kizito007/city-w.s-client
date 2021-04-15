import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap"
import products from "../products"

const ViewRinglight = ({ match }) => {    
    const product = products.find((p) => p._id === 3) 

    return (
        <>
            <div className="detaills">
                <div className="big-img">
                    <img src={product.image[0]} alt=""/>
                </div>

                <div className="box">
                    <div className="roww">
                        <h2> {product.name} </h2>
                        <span> ${product.price} </span>
                    </div>
                    <div className="colors">
                        {
                            product.colors.map(color => (
                                <button style={{background: color}}></button>
                            ))
                        }
                    </div>
                    <p> {product.description} </p>
                    <p> {product.description} </p>

                    <div className="thumb">
                        {
                            product.image.map(img => (
                                <img src={img} alt=""/>
                            ))
                        }
                    </div>
                    {/* <button className="cart"> Add to cart </button> */}
                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}
                        style={{ padding: "5px", width: "300px", backgroundColor: "#252525" }}
                    >
                        Add To Cart
                    </Button>
                </div>
            </div> 
        {/* <Link className="btn btn-dark my-3" to="/">
            Go Back
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h4> {product.name} </h4>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {
                                        product.countInStock > 0 ? "In Stock" : "Out of Stock"
                                    }
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                ADD TO CART
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row> <br/> <br/> */}
        </>  
    )
}

export default ViewRinglight