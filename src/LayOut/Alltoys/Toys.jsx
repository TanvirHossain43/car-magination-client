import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ toys }) => {
    const {_id, seller_name, price, toy_name, rating, available_quantity, sub_category } = toys

    return (
       
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {toy_name}
                    </th>
                    <td className="px-6 py-4">
                        {seller_name}
                    </td>
                    <td className="px-6 py-4">
                        {sub_category}
                    </td>
                    <td className="px-6 py-4">
                        {available_quantity}
                    </td>
                    <td className="px-6 py-4">
                        ${price}
                    </td>

                    <td className="px-6 py-4">
                        <Link to={`/viewdetails/${_id}`} className='btn btn-primary'>View Details</Link>
                    </td>
                </tr>

            </tbody>

            );
};

            export default Toys;