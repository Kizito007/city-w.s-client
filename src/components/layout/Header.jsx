import React, { useState, useEffect, useContext } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import * as FaIcons from "react-icons/fa"
import { getUserProfile } from "./Api"
import UserContext from "../context/UserContext"
import * as BiIcons from "react-icons/bi"

const Header = () => {
    const { userData, setUserData } = useContext(UserContext);
    // const history = useHistory();
    // const match = useRouteMatch()
    const [userDetails, setUserDetails] = useState({})
    const [userRole, setUserRole] = useState(false)

    useEffect(() => {
        
        // if (! userData.user) 
        //     return history.push("/login")

        const fetchProfile = async () => {
            let token = userData.token
            const details = await getUserProfile(token)
            setUserDetails(details)
        }
        fetchProfile();
    }, [userData.user, userData.token])

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "")
    };

    // useEffect(() => {
    //     // console.log(userDetails)

    //     if (userDetails) {
    //         console.log(userDetails.role)
    //     let role = userDetails.role

    //     if (role === "boss") {
    //         console.log(role)
    //         setUserRole(true)
    //     } else if (role === "admin") {
    //         console.log(role)
    //         setUserRole(true)
    //     } else {
    //         setUserRole(false)
    //     }
    //     }
    //     console.log(subids);
    //     if (subids) {
    //         if (subids.includes(userDetails.id)) { 
    //             setEnrolled("true");
    //         } else {
    //             setEnrolled("false");
    //         }
    //     }contentDetails.subscriberids, userDetails.id
        

    // }, [])

    return <header>
        <Navbar bg="dark" expand="lg" className="color-nav">
        <Navbar.Brand href="#home">City-Wide Stores</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Iphone Cases</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ringlights</NavDropdown.Item>
                {
                    userDetails ?
                    <>
                    <NavDropdown.Divider />
                    {
                        userDetails.role === "boss" || userDetails.role === "admin" ? <>
                    
                        <NavDropdown.Item href="/icase/create">New I-Case</NavDropdown.Item>
                        <NavDropdown.Item href="/ringlight/create">New Ringlight</NavDropdown.Item> </> : null
                    }
                        
                    </> : null          
                }
            </NavDropdown>
            {
                userDetails ?
                <NavDropdown title={userDetails.firstName + " " + userDetails.lastName} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1" onClick={logout}><BiIcons.BiLogOut /> Log out</NavDropdown.Item>
                </NavDropdown> :
                <NavDropdown title="Account" id="basic-nav-dropdown" style={{ marginLeft: "20px" }}>
                    <NavDropdown.Item href="/login"><BiIcons.BiLogIn /> Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register"><BiIcons.BiLogInCircle /> Sign Up</NavDropdown.Item>
                </NavDropdown>
            }
            <Nav.Link href="#home"> <i> <FaIcons.FaCartPlus/> </i> Cart</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </header>
    
}

export default Header;