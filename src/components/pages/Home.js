import React from "react"
import { Carousel, Card, Button } from "react-bootstrap"
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
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={light1}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ margin: "0 5%", color: "#29292b" }} className="i-cards">
                <h4> Iphone Case Categories </h4> <br/>
                <Card style={{ width: '9rem' }}>
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
                <Card style={{ width: '9rem' }}>
                    <Card.Img variant="top" src={case2} />
                    <Card.Body>
                        <Card.Title>Iphone 6</Card.Title>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem' }}>
                    <Card.Img variant="top" src={case2} />
                    <Card.Body>
                        <Card.Title>Iphone 6</Card.Title>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem' }}>
                    <Card.Img variant="top" src={case2} />
                    <Card.Body>
                        <Card.Title>Iphone 6</Card.Title>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem' }}>
                    <Card.Img variant="top" src={case2} />
                    <Card.Body>
                        <Card.Title>Iphone 6</Card.Title>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem' }}>
                    <Card.Img variant="top" src={case2} />
                    <Card.Body>
                        <Card.Title>Iphone 6</Card.Title>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                
                <h4> Iphone Case Slides </h4>
                <h4> Ringlights Slides </h4>
            </div>
        </>
    )
}

export default Home