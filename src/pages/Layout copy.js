import { Outlet, Link } from "react-router-dom"; 
import { Nav } from 'react-bootstrap';

const Layout = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9">

            <Nav>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            </div>
          </div>
        </div>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;