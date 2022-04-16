import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {id, course, img, price, discription } = service

    const navigate = useNavigate()

    const handleCheckOut = () => {
        navigate(`/${id}`)
    }
    return (
        <div className="container col-sm-12 col-md-6 col-lg-4 mt-5">
            <Card style={{ width: '18rem', padding: '16px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{  }}>Title: {course}</Card.Title>
                    <Card.Text>
                        <span style={{  }}>{discription}</span>
                        <h6 style={{  }}>Price: ${price}</h6>
                    </Card.Text>
                    <Button onClick={() => handleCheckOut(id)} variant="primary">Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;