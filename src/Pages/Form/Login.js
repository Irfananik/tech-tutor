import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const navigateToSignUp = () => {
        navigate('/signup')
    }
    return (
        <div className="container my-5">
            <h3 style={{color: '#566FAA', fontWeight:'bold'}} className="text-center">Login with your email</h3>
            <Form className="container w-50 mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex aling-items-center justify-content-center">
                    <Button style={{  }} variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            <p className="mt-3 text-center" style={{}}>Are you new here? <span onClick={navigateToSignUp} className="text-primary" style={{ cursor: 'pointer' }}>SignUp</span> </p>
            <p className="mt-2 text-center" style={{}}>Forget your password? <span className="text-primary" style={{ cursor: 'pointer' }}>Reset Password</span> </p>
        </div>
    );
};

export default Login;