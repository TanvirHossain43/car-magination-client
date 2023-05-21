import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const CategoryToys = ({ category }) => {
    const { _id, available_quantity, picture, price, rating, seller_email, seller_name, sub_category, toy_description, toy_name } = category;

    const { user } = useContext(AuthContext)

    const handleAlert = () => {
        if (!user) {
            alert('You have to log in first to view details')
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={picture} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toy_name}

                </h2>
                <p>Price:{price}$</p>
                <p>Rating:{rating}$</p>
                <div>
                    <button onClick={handleAlert} className='btn btn-primary'><Link to={`viewdetails/${_id}`}>View Details</Link></button>
                </div>

            </div>
        </div>
    );
};

export default CategoryToys;