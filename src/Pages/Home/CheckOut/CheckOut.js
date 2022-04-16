import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {checkoutId} = useParams()
    return (
        <div className="my-5">
            <h2 style={{ color: '#566FAA', fontWeight:'bold'}}>Welcome to our course number: {checkoutId}</h2>
            <div>
                
            </div>
        </div>
    );
};

export default CheckOut;