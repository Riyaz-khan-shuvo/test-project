import React from 'react';
import { Link } from 'react-router-dom';
import { Button, InputGroup } from 'react-bootstrap';
import { Nav, Navbar, FormControl, Form, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faSearch } from '@fortawesome/free-solid-svg-icons';
import './Menu.css'
const Menu = () => {
    return (
        <div className="sticky-top" style={{ borderBottom: "1px solid #ddd" , borderTop:"1px solid #ddd" }}>
            <Navbar bg="light" expand="sm" className="text-center">
                <Nav.Link href="#home" className="text-dark">Showing 1-40 of 80,655 products</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="" style={{ color: "black" }}>Refine By</Nav.Link>
                        <div className="borders"></div>
                        <NavDropdown className="price" title="Price" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">100</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">255 </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">355</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"> 455</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#home" style={{ color: "black" }}>Sort By</Nav.Link>
                        <div className="borders"></div>
                        <NavDropdown title="Best Sellers" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Shirt</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Head Phone </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bag</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"> Watch</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <InputGroup className="">
                            <FormControl
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2"> <FontAwesomeIcon icon={faSearch} /> </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;