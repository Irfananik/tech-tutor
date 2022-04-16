import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setServices(data).json())
    }, [])


    return (
        <div className="container mt-5">
            <h3 className="text-center" style={{ }}>Our Available Course: <span style={{  }}>{services.length}</span></h3>
            <div className="container row">
                {
                    services.map(service => <Service key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;