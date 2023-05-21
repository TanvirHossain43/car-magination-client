import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='text-white w-11/12 mx-auto space-y-4 mt-6 mb-6'>
            <div className='bg-teal-900 p-4 rounded-xl space-y-4'>
                <h1 className="font-bold text-xl ">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p><span className='text-lg font-semibold'>Access Token:</span> An access token is a credential that grants access to protected resources or actions on behalf of a user. It is typically issued to a client (e.g., a web or mobile application) after successful authentication. When a user logs in or authenticates through a server, the server generates an access token specific to that user and includes relevant information like the user's identity and any associated permissions. The access token is used to verify the client's authorization when making requests to the server</p>
                <p><span className='text-lg font-semibold'>Refresh Token:</span>A refresh token is a credential that is typically issued alongside the access token during the authentication process.Refresh token is long lived token.When the access token expires, the client can use the refresh token to request a new access token without requiring the user to re-authenticate.The primary purpose of the refresh token is to obtain a new access token.</p>
            </div>
            <div className='bg-teal-900 p-4 rounded-xl space-y-4'>
                <h2 className="font-bold text-xl ">2.Compare SQL and NoSQL databases?</h2>
                <p><span className='text-lg font-semibold'>SQL:</span>SQL databases use a structured data model known as a relational model. Data is organized into tables with predefined schemas, and relationships between tables are established using primary and foreign keys.</p>
                <p><span className='text-lg font-semibold'>NoSQL:</span> NoSQL databases use various data models, including key-value, document, columnar, and graph. These models offer more flexibility in organizing and representing data, allowing for schemaless or semi-structured data.</p>
            </div>
            <div className='bg-teal-900 p-4 rounded-xl space-y-4'>
                <h2 className="font-bold text-xl ">3.What is express js? What is Nest JS?</h2>
                <p><span className='text-lg font-semibold'>Express js:</span>Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple, unopinionated way to build web applications and APIs. It focuses on providing a lightweight framework with essential features, allowing developers to have more control over the application's structure and components. allows you to define routes, handle HTTP requests and responses, set up middleware for request processing, and implement various functionalities using a wide range of third-party libraries and modules available in the Node.js ecosystem.</p>
                <p><span className='text-lg font-semibold'>Next js:</span>Nest.js is a progressive and opinionated web application framework for Node.js, heavily inspired by Angular. It combines elements of object-oriented programming, functional programming, and reactive programming paradigms to create scalable and maintainable applications.</p>
            </div>
            <div className='bg-teal-900 p-4 rounded-xl space-y-4'>
                <h2 className="font-bold text-xl  ">4.What is MongoDB aggregate and how does it work ?</h2>
                <p >the aggregate method is used to perform advanced data processing operations and data analysis on the documents stored in a collection. It allows you to perform complex queries, transformations, and aggregations on the data.The aggregate method takes an array of stages as input, where each stage represents a specific data processing step. Each stage in the pipeline operates on the data received from the previous stage and passes the transformed data to the next stage. This pipeline-like structure allows you to perform a sequence of operations on the documents in a collection.</p>
            </div>
        </div>
    );
};

export default Blog;