import React from 'react';

const Blog = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center" style={{ color: '#566FAA', fontWeight: 'bold'}}>Blog</h2>
            <div className="container my-5">
                <h3 style={{ color: '#567BAD', fontWeight: 'bold', textAlign: 'left'}}>Difference between authorization and authentication:</h3>
                <div className='my-4' style={{ textAlign: 'left' }}>
                    <p style={{ color: '#A2B5DC'}}>authentication-
                        <li>User identity is confirmed</li>
                        <li>User and user server is verified</li>
                        <li>Data is available via Token ID's</li>
                        <li>Login details, usernames, passwords, OTP's required</li>
                        <li>User can partially change the authentication details as per the requirement</li>
                    </p>
                    <p style={{ color: '#A2B5DC'}}>authorization-
                        <li>user is given permission to access the system or resources after validation</li>
                        <li>Checks the security level and privilege of the user, then determining what the user can or cannot have access too</li>
                        <li>it is validated if the user is allowed to access via some defined rules</li>
                        <li>Data provided via Access token</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;