import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

import useTitle from '../../hooks/useTitle';

const AllToys = () => {

    const [AllToys, setAllToys] = useState([])
    useTitle('All-Toys')
    useEffect(() => {
        fetch('https://car-toys-server.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">


            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {/* head */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="md:px-6 md:py-3">Toy Name</th>
                        <th scope="col" className="md:px-6 md:py-3">Seller</th>
                        <th scope="col" className="md:px-6 md:py-3">Sub-category</th>
                        <th scope="col" className="md:px-6 md:py-3">Available Quantity</th>
                        <th scope="col" className="md:px-6 md:py-3">price</th>
                        <th scope="col" className="md:px-6 md:py-3">Veiw Details</th>
                    </tr>
                </thead>
                {
                    AllToys.map(toys => <tbody key={toys._id}>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {toys.toy_name}
                            </th>
                            <td className="px-6 py-4">
                                {toys.seller_name}
                            </td>
                            <td className="px-6 py-4">
                                {toys.sub_category}
                            </td>
                            <td className="px-6 py-4">
                                {toys.available_quantity}
                            </td>
                            <td className="px-6 py-4">
                                ${toys.price}
                            </td>

                            <td className="px-6 py-4">
                                <Link to={`/viewdetails/${toys._id}`} className='btn btn-primary'>View Details</Link>
                            </td>
                        </tr>

                    </tbody>)
                }
            </table>
        </div>
    );
};

export default AllToys;