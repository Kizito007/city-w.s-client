import React from "react"
import { Carousel } from "react-bootstrap"
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
            <div style={{ margin: "0 5%" }}>
                <h4> Categories </h4>
                <h4> Iphone Cases </h4>
                <h4> Ringlights </h4>
            </div>
        </>
    )
}

export default Home