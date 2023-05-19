import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Toys from './Toys';

const AllToys = () => {

    const [AllToys, setAllToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

           
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {/* head */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Toy Name</th>
                        <th scope="col" className="px-6 py-3">Seller</th>
                        <th scope="col" className="px-6 py-3">Sub-category</th>
                        <th scope="col" className="px-6 py-3">Available Quantity</th>
                        <th scope="col" className="px-6 py-3">price</th>
                        <th scope="col" className="px-6 py-3">Veiw Details</th>
                    </tr>
                </thead>
                {
                AllToys.map(toys => <Toys
                    key={toys._id}
                    toys={toys}
                ></Toys>)
            }
            </table>
        </div>
    );
};

export default AllToys;