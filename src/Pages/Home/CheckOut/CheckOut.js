import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {checkoutId} = useParams()
    return (
        <div className="my-5">
            <h2 style={{ color: '#566FAA', fontWeight:'bold'}}>Welcome to our course number: {checkoutId}</h2>
            <div>
                <h4 className="my-4" style={{ color: '#A2B5DC' }}>"This section under maintainence. Please stay with me for updates"</h4>
            </div>
        </div>
    );
};

export default CheckOut;