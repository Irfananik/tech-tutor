import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth)

    const handleLogOut = () => {
        signOut(auth)
    }

    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img style={{ height: '50px' }} className="rounded-pill" src={'https://i.ibb.co/J5Qnq9n/logo-tech.jpg'} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{ fontSize: '24px' }} as={Link} to='/'>TechTutorGm</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            { 
                            user ? <button className="btn btn-link text-decoration-none text-primary"onClick={handleLogOut}>LogOut</button>
                            :
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to='/signup'>SignUp</Nav.Link>
                            <Nav.Link href="#memes">
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;