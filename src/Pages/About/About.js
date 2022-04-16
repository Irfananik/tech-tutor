import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container my-5">
            <h2 className="my-5" style={{ color: '#566FAA', fontWeight: 'bold' }}>About myself and my future goals</h2>
            <Card>
                <Card.Img className="img-fluid" variant="top" src={''} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;