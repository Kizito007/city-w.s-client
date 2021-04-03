import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const Header = () => {
    return <header>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">City-Wide-Stores</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">IPhone Cases</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ringlights</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="basic-nav-dropdown" style={{ marginLeft: "20px" }}>
                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Admin</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Cart</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </header>
    
}

export default Header;