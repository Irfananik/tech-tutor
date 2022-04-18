import React from 'react';
import { Carousel } from 'react-bootstrap';

const UpComming = () => {
    return (
        <div className="container my-5">
            <h1 className="my-5" style={{ color: '#566FAA', fontWeight: 'bold' }}>UpComming Courses</h1>
            <Carousel className="container" variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-25"
                        src="https://i.ibb.co/0cwL7yW/machine-learning-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: '#566FAA', fontWeight: 'bold' }}>Machine Learning</h3>
                        <p style={{  }}>Machine learning course will be available after the next month.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-25"
                        src="https://i.ibb.co/80wY8TD/deta-since-1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: '#566FAA', fontWeight: 'bold' }}>Data Sciences</h3>
                        <p style={{ }}>Data Science course will be available after the next month.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default UpComming;