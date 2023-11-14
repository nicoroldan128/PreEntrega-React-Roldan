import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Drink App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto style-nav"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className={({isActive})=> isActive ? "btn btn-dark" : "btn"} to={"/"}>Inicio</NavLink>
              <NavLink className={({isActive})=> isActive ? "btn btn-dark" : "btn"} to={"categoria/cerveza"}>Cerveza</NavLink>
              <NavLink className={({isActive})=> isActive ? "btn btn-dark" : "btn"} to={"categoria/gin"}>Gin</NavLink>
              <NavLink className={({isActive})=> isActive ? "btn btn-dark" : "btn"} to={"categoria/ron"}>Ron</NavLink>
              <NavLink className={({isActive})=> isActive ? "btn btn-dark" : "btn"} to={"categoria/vodka"}>Vodka</NavLink>
              <NavLink className={({isActive})=> isActive ? "btn btn-dark" : "btn"} to={"categoria/whisky"}>Whisky</NavLink>
              
            </Nav>
            <Nav>
              <Nav.Link href="/cart">
                <NavLink className={({isActive})=> isActive ? "btn btn-dark" : "btn"} to={"/cart"}>
                  <CartWidget />
                </NavLink>
                
              </Nav.Link>
            </Nav>
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar