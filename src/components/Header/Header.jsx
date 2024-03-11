
import { Container, Nav, Navbar, } from "react-bootstrap"
import { Link } from "react-router-dom"
import maplLogo from "../../assets/image/maplLogo.png"

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="mapl-logo"><img className="img-fluid" src={maplLogo} alt="Magura Agriculture Limited" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-style mapl-menu">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header