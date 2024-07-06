import React from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useAllCategories } from '../../hooks/useAllCategories';

import CardWidgetComponent from '../CardWidgetComponent/CardWidgetComponent';


const NavBarComponent = () => {
  
  const {categories} = useAllCategories();
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand><Link to="/">Tienda Online</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">          
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            
            {categories.map ((category) => {
              return(
                <NavDropdown.Item key={category.slug}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </NavDropdown.Item>
              )
            })}
            
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CardWidgetComponent/>
    </Container>
  </Navbar>
  )
}

export default NavBarComponent