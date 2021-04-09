import React from "react"
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <ul className="footer-right">
                <li className="features">
                    <h5> About </h5> <br/>
                        <p>
                            Bacon ipsum dolor amet short loin strip steak leberkas ribeye beef pork loin pork belly drumstick
                            frankfurter. Corned beef ball tip="" pork belly pig sirloin, ham hock chuck cow fatback strip steak
                        </p>
                    <ul className="boxx ul">
                        {/* <h3 style={{fontSize: "1.0rem"}}> Contact Us </h3> <br/> */}
                        <h5> <a href="mailto:remetechnologysolutions@gmail.com" style={{color: "#ea9797"}}> <i> Send Mail  </i>  </a> </h5>
                        <br/>
                    </ul>
                </li>
                <li className="features">
                    <h5> Social </h5> <br/>
                    
                    <ul className="boxx">
                        <li> <a href="https://twitter.com/remetech1"><i>  </i>Twitter</a> </li> <br/>
                        <li> <a href="https://instagram.com/remetech1"><i style={{color: "#E1306C"}}>  </i>Instagram</a> </li> <br/>
                        <li> <a href="https://facebook.com/REME-Tech-Solutions-108895890929074"><i>  </i>Facebook</a> </li> <br/>
                    </ul>
                </li>
            </ul>

            <div className="footer-bottom">
                <h4> City Wide Stores </h4> <br/>
                <p> All Rights reserved by City-Wide-Stores <br/> &copy; 2021 </p>
            </div>
            {/* <div className="main-content">
                <div className="left box">
                    <h2>About Us</h2>
                    <div className="content">
                        <p>
                            Bacon ipsum dolor amet short loin strip steak leberkas ribeye beef pork loin pork belly drumstick
                            frankfurter. Corned beef ball tip="" pork belly pig sirloin, ham hock chuck cow fatback strip steak
                        </p>
                        <div className="social">
                            <a href="#"> <span> Twitter </span> </a>
                            <a href="#"> <span> Twitter </span> </a>
                            <a href="#"> <span> Twitter </span> </a>
                            <a href="#"> <span> Twitter </span> </a>
                        </div>
                    </div>
                </div>
                <div className="center box">
                    <h2> Address </h2>
                    <div className="content">
                        <div className="place">
                            <span>Location</span>
                        </div>
                        <div className="phone">
                            <span>090233</span>
                        </div>
                        <div className="email">
                            <span>abc@example.com</span>
                        </div>
                    </div>
                </div>
                <div className="right box">
                    <h2>Contact Us</h2>
                    <div className="content">
                        <form action="#">
                            <div className="email">
                                <div className="text"> Email * </div>
                                <input type="email" required />
                            </div>
                            <div className="msg">
                                <div className="text"> Message * </div>
                                <textarea rows="2" cols="25" required></textarea>
                            </div>
                            <div className="bttn">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer;