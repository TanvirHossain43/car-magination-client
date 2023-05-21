import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ViewDetails = () => {
    const toyDetails = useLoaderData()
    console.log(toyDetails)
    const { available_quantity, picture, price, rating, seller_email, seller_name, sub_category, toy_description, toy_name } = toyDetails;

    return (
        <div className='mt-10 mb-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/2 mx-auto  text-white rounded-xl">
                <figure className='w-1/2'>
                    <img src={picture} className='h-full' />
                </figure>
                <div className="card-body " style={{ backgroundColor: '#00203F' }} >

                    <h2 className="card-title text-2xl" style={{ color: '#ADF0D1' }}>
                        {toy_name}
                    </h2>

                    <p>
                        <span className='font-extrabold mr-1 ' style={{ color: '#ADF0D1' }} >Description:</span>
                        {toy_description}
                    </p>

                    <p>
                        <span className='font-extrabold mr-1 ' style={{ color: '#ADF0D1' }} >Category:</span>
                        {sub_category}
                    </p>

                    <p>
                        <span className='font-extrabold mr-1 ' style={{ color: '#ADF0D1' }}>Rating:</span>
                        {rating}
                    </p>

                    <p>
                        <span className='font-extrabold mr-1 ' style={{ color: '#ADF0D1' }} >price:</span>
                        {price}$
                    </p>

                    <p>
                        <span className='font-extrabold mr-1 ' style={{ color: '#ADF0D1' }} >Availeable Quantity:</span>
                        {available_quantity}
                    </p>

                    <p>
                        <span className='font-extrabold mr-1 ' style={{ color: '#ADF0D1' }}>Seller Name:</span>
                        {seller_name}</p>
                    <p>
                        <span className='font-extrabold mr-1 ' style={{ color: '#ADF0D1' }}>Seller email:</span>
                        {seller_email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;