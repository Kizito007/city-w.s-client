import React from "react"
import * as FaIcons from "react-icons/fa"
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <ul className="footer-right">
                <li className="features">
                    <h5> About </h5> <br/>
                        <p style={{ fontSize: "14px" }}>
                            City-Wide Stores is an online marketplace based on the selling and delivering of high quality Iphone Cases and Ringlights. <br/>
                            {/* We provide sharp and affordable deals with our experience and our reliability is guaranteed   */}
                        </p>
                    <ul className="boxx ul">
                        {/* <h3 style={{fontSize: "1.0rem"}}> Contact </h3>  */}
                        <br/>
                        <h5> <a href="#home" style={{color: "#ea9797", fontSize: "14px" }}> <i> Send Mail <FaIcons.FaTelegram/> </i>  </a> </h5>
                        <br/>
                    </ul>
                </li>
                <li className="features">
                    <h5> Social </h5> <br/>
                    
                    <ul className="boxx">
                        <li> <a href="#home"><i style={{ color: "#299bff" }}> <FaIcons.FaTwitter/> </i>Twitter</a> </li> <br/>
                        <li> <a href="#home"><i style={{color: "#E1306C"}}> <FaIcons.FaInstagram/> </i>Instagram</a> </li> <br/>
                        <li> <a href="#home"><i style={{ color: "#348dda" }}> <FaIcons.FaFacebook/>  </i>Facebook</a> </li> <br/>
                    </ul>
                </li>
            </ul>

            <div className="footer-bottom">
                <h5> City-Wide Stores </h5> 
                <p style={{ fontSize: "14px" }}> All Rights reserved by City-Wide Stores <br/> &copy; 2021 </p>
            </div>
        </footer>
    )
}

export default Footer;