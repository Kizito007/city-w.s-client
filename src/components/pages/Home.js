import React from "react"
import { Carousel, Card, Button, Container, Row, Col } from "react-bootstrap"
import case2 from "../img/case2.jfif"
import light1 from "../img/light3.jfif"
//Jumbotron, Container
const Home = () => {
    return (
        <>
            <div className="carou">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={case2}
                        alt="Pouch"
                        />

                        <Carousel.Caption>
                        <h3 style={{ color: "#ff0a0a" }}>Apple Pouches</h3>
                        <p style={{     
                            color: "#191818",
                            fontSize: "21px"
                        }} >
                            Beautiful and Protective phone cases for all Iphones... 
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={light1}
                        alt="Light"
                        />

                        <Carousel.Caption>
                        <h3>Lights Up</h3>
                        <p>Beautify the vision with our Ringlights</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h4 style={{ margin: "0 5%", color: "#e2ecf5" }}> Featured Products </h4> <br/>
            <div style={{ margin: "0 5%", color: "#29292b" }} className="i-cards">
                <h4> Iphone Case Categories </h4> <br/>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img variant="top" src={case2} />
                                <Card.Body>
                                    <Card.Title>Iphone 6</Card.Title>
                                    {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text> */}
                                    <Button variant="primary">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img variant="top" src={case2} />
                                <Card.Body>
                                    <Card.Title>Iphone 6</Card.Title>
                                    <Button variant="primary">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img variant="top" src={case2} />
                                <Card.Body>
                                    <Card.Title>Iphone 6</Card.Title>
                                    <Button variant="primary">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img variant="top" src={case2} />
                                <Card.Body>
                                    <Card.Title>Iphone 6</Card.Title>
                                    <Button variant="primary">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img variant="top" src={case2} />
                                <Card.Body>
                                    <Card.Title>Iphone 6</Card.Title>
                                    <Button variant="primary">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img variant="top" src={case2} />
                                <Card.Body>
                                    <Card.Title>Iphone 6</Card.Title>
                                    <Button variant="primary">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>                     
                <h4> Ringlights Slides </h4>
            </div>
        </>
    )
}

export default Home