import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="container my-5">
            <h2 className="text-center" style={{ color: '#566FAA', fontWeight:'bold'}}>Available Course: <span style={{  }}>{services.length}</span></h2>
            <div className="container row">
                {
                    services.map(service => <Service key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;