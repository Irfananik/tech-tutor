import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const [agre, setAgre] = useState(false)

    const navigate = useNavigate()

    let errorElement

    const navigateToLogin = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

    if (user) {
        navigate('/')
    }

    if (error) {
        errorElement =
            <p className="text-danger">Error: {error?.message}</p>
    }

    const handleSignUpSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value


        createUserWithEmailAndPassword(email, password)


    }

    return (
        <div className="container mt-5">
            <h4 style={{ color: '#566FAA', fontWeight: 'bold' }}>SignUp Here</h4>
            <Form onSubmit={handleSignUpSubmit} className="container w-50 mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <p className="mt-2">{errorElement}</p>
                <input onClick={() => setAgre(!agre)} type="checkbox" name="terms" id="terms" />
                <level className={`${agre ? '' : 'text-danger'}`} htmlFlor='terms'> Accept our terms and conditions </level> <br /> <br />
                <div className="d-flex aling-items-center justify-content-center">
                    <Button disabled={!agre} style={{}} variant="primary" type="submit">
                        SignUp
                    </Button>
                </div>
            </Form>
            <p className="mt-3 text-center" style={{ color: '#E5B429' }}>Allready you have account? <span onClick={navigateToLogin} className="text-primary" style={{ cursor: 'pointer', color: '' }}>Login</span> </p>
            <SocialLogin />
        </div>
    );
};

export default SignUp;