import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div classNameName="container my-5">
            <h1 className="my-5" style={{ color: '#566FAA', fontWeight: 'bold' }}>About myself</h1>
            <div className="card my-5 container d-flex alig-items-center justify-content-center">
                <div className="container d-flex alig-items-center justify-content-center my-5">
                    <img src={'https://i.ibb.co/w46jBQT/oooo-plus-35.png'} className="card-img-top w-25" alt="..." />
                </div>
                <div className="card-body">
                    <h4 className="card-title my-2" style={{ color: '#567BAD', fontWeight: 'bold' }}>Golam Morshed</h4>
                    <p className="card-text" style={{ color: '#A2B5DC' }}>Hello, this is Golam Morshed. I'm a independent services provider. I provide various programmig tutorial course which you have seen on the services section. I want to be a professional software developer. I'm willing to work hard for this dream. Also i'm still working hard for my dream. No matter how frustrated i'm, i will continue to work.</p>
                    <Link style={{textDecoration:'none'}} to='/'>See More</Link>
                </div>
            </div>
        </div>
    );
};

export default About;