import { Outlet } from "react-router-dom"; 
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import logoimg from '../assets/images/logo.png'; 
import Example from '../Modelpopup';
import '../App.css'
const Layout = () => {
    return (
      <>
        <section className="sticky-top bg-white header-shadow">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home" className="col-8 col-md-4">
                <img
                  className="img-fluid"
                  src={logoimg}
                  alt="First slide"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="col-md-6">
                  <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About Us</Nav.Link>
                  <NavDropdown title="Programs" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  <Nav.Link href="/blogs">Blogs</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                <div className="d-none d-md-block col-md-2">
                <Example />
                </div>
              </Container>
            </Navbar>
            </div>
          </div>
        </div>          
        </section>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;