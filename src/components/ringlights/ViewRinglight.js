import React, { useState } from "react"
// import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import * as FaIcons from "react-icons/fa"
import products from "../products"

const ViewRinglight = ({ match }) => {    

    const [index, setIndex] = useState(0)
    const product = products.find((p) => p._id === 3) 

    const handleTab = index => setIndex(index)

    return (
        <>
            <div className="detaills">
                <div className="big-img">
                    <img src={product.images[index]} alt=""/>
                </div>

                <div className="box">
                    <div className="roww">
                        <h2> {product.name} </h2>
                        <span> ${product.price} </span>
                    </div>
                    <div className="colors">
                        {
                            product.colors.map(color => (
                                <button key={color} style={{background: color}}></button>
                            ))
                        }
                    </div>
                    <p> {product.description} </p>
                    <p> {product.countInStock > 0 ? "In Stock" : "Out of Stock"} </p>

                    <div className="thumb">
                        {
                            product.images.map((img, index) => (
                                <img src={img} alt="" key={index}
                                onClick={() => handleTab(index)}
                                />
                            ))
                        }
                    </div>
                    {/* <button className="cart"> Add to cart </button> */}
                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}
                        style={{ padding: "5px", width: "300px", backgroundColor: "#252525" }}
                    >
                        Add To Cart <i> <FaIcons.FaCartPlus/> </i>
                    </Button>
                </div>
            </div> 
        </>  
    )
}

export default ViewRinglight