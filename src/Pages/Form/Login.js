import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate()

    const navigateToSignUp = () => {
        navigate('/signup')
    }

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const handleLogin = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    if (user) {
        navigate(from, { replace: true })
    }


    return (
        <div className="container my-5">
            <h3 style={{ color: '#566FAA', fontWeight: 'bold' }} className="text-center">Login with your email</h3>
            <Form onSubmit={handleLogin} className="container w-50 mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex aling-items-center justify-content-center">
                    <Button style={{}} variant="primary" type="submit">
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