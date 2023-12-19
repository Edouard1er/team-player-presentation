import React, {useContext} from 'react';
import { Container, Nav, Navbar, Stack, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import "../styles/NavBar.scss";
import logo from "../assets/logo.png";

import { 
    APPLICATION_NAME, 
    
} from "../constants/text";

const NavbarPrincipalComponent = () => {


    return (
        <Navbar expand="lg" sticky="top" className="navbar-custom">
            <Container className='w-90'>
                <Navbar.Brand className='margin-right-10'>
                    <Link to="/" className="link-light text-decoration-none">
                        <Stack gap={1} direction='horizontal'>
                            <img className='img-logo' alt='SDE2A' src={logo} />
                            <div className='navbar-text-close-to-logo'>
                                <h3 className='fw-bold'>{APPLICATION_NAME}</h3>
                                <h5 className='fw-bold'>Eddy</h5>
                            </div>
                        </Stack>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className='bg-third-color' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="w-100 justify-content-between">
                        <LinkContainer className='link' to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer className='link' to="/teams">
                            <Nav.Link>Teams</Nav.Link>
                        </LinkContainer>

                        <LinkContainer className='link' to="/history">
                            <Nav.Link>History</Nav.Link>
                        </LinkContainer>

                                                      
                               
                        </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarPrincipalComponent;