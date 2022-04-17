import React from 'react';

const Blog = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center" style={{ color: '#566FAA', fontWeight: 'bold' }}>Blog</h1>
            <div className="container my-5">
                <h3 style={{ color: '#567BAD', fontWeight: 'bold', textAlign: 'left' }}>Difference between authorization and authentication:</h3>
                <div className='my-4' style={{ textAlign: 'left' }}>
                    <p style={{ color: '#A2B5DC' }}>authentication-
                        <li>User identity is confirmed</li>
                        <li>User and user server is verified</li>
                        <li>Data is available via Token ID's</li>
                        <li>Login details, usernames, passwords, OTP's required</li>
                        <li>User can partially change the authentication details as per the requirement</li>
                    </p>
                    <p style={{ color: '#A2B5DC' }}>authorization-
                        <li>user is given permission to access the system or resources after validation</li>
                        <li>Checks the security level and privilege of the user, then determining what the user can or cannot have access too</li>
                        <li>it is validated if the user is allowed to access via some defined rules</li>
                        <li>Data provided via Access token</li>
                    </p>
                </div>
                <div className='my-5' style={{ textAlign: 'left' }}>
                    <h3 style={{ color: '#567BAD', fontWeight: 'bold', textAlign: 'left' }}>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='my-4' style={{ color: '#A2B5DC' }}>Authentication the firebase server authentication is the feature most apps requre to recngnige the identity of the user. This authentication solution provides backend services, easy-to-use firebase SDK's, and ready-made UI libraries to authenticate users to your app. Google Firebase is free for you to use up to 30 project's. It's also user friendly for beginners. There are many things alredy made here which makes it convenient to use. Here it is free hosting advantage</p>
                </div>
                <div className='my-5' style={{ textAlign: 'left' }}>
                    <h3 style={{ color: '#567BAD', fontWeight: 'bold', textAlign: 'left' }}>What other services does firebase provide other than authentication?</h3>
                    <p className='my-4' style={{ color: '#A2B5DC' }}>
                        In this paragraph, you will learn about multiple Firebase competitors. Some are relatively new companies but still provide useful services to developers and also beginners. The paragraph will cover the following competitors:
                        <li>Parse - open source backend platform</li>
                        <li>Back4app - parse server Hosting Platform</li>
                        <li>Kinvy - Mobile Backend as a Service (mBaaS) for the Enterprise</li>
                        <li>Hoodie - genaric backend with a client API for Offline First applications</li>
                        <li>Deployd - simple core library, with a modular API for your application</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;