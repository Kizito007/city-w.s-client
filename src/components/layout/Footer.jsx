import React from "react"
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <ul className="footer-right">
                <li className="features">
                    <h5> Service </h5> <br/>
                    
                    <ul className="boxx ul">
                        <h3 style={{fontSize: "1.0rem"}}> Contact Us </h3> <br/>
                        <h5> <a href="mailto:remetechnologysolutions@gmail.com" style={{color: "#8a5050"}}> <i> Send Mail  </i>  </a> </h5>
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
        </footer>
    )
}

export default Footer;