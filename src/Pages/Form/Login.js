import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate()

    let errorElement

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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    )

    const handleLogin = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email)
        alert('Sent email')
    }

    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    if (user) {
        navigate(from, { replace: true })
    }

    if (error) {
        errorElement =
            <p className="text-danger">Error: {error?.message}</p>
    }


    return (
        <div className="container my-5">
            <h3 style={{ color: '#566FAA', fontWeight: 'bold' }} className="text-center">Login with your email</h3>
            <Form onSubmit={handleLogin} className="container w-50 mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p className="mt-2">{errorElement}</p>
                <div className="d-flex aling-items-center justify-content-center">
                    <Button style={{}} variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            <p className="mt-3 text-center" style={{}}>Are you new here? <span onClick={navigateToSignUp} className="text-primary" style={{ cursor: 'pointer' }}>SignUp</span> </p>
            <p className="mt-2 text-center" style={{}}>Forget your password? <span onClick={resetPassword} className="text-primary" style={{ cursor: 'pointer' }}>Reset Password</span> </p>
            <SocialLogin />
        </div>
    );
};

export default Login;