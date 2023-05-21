import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
// import AddedToys from './AddedToys';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';
import UpdateDetails from '../../components/UpdateDetails/UpdateDetails';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [addedToys, setAddedToys] = useState([])
    const [asc, setAsc] = useState(true)
    useTitle('My-Toys')


   
    const url = `http://localhost:5000/categorytoys?email=${user?.email}&sort=${asc ? 'asc' : 'desc'}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAddedToys(data)
                console.log(data)
            })

    }, [url])


    const handleDelete = id => {
        const proceed = confirm('Are you sure to delete')
        if (proceed) {
            fetch(`https://car-toys-server.vercel.app/alltoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Toy Deleted successfully!',
                            'Good Job!',
                            'success'
                        )
                        const remaining = addedToys.filter(addedToy => addedToy._id !== id)
                        setAddedToys(remaining)
                    }
                })
        }

    }




    return (
        <div>
            <button className='btn btn-primary'
                onClick={() => setAsc(!asc)}
            >{asc ? 'high to low' : 'low to high'}</button>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">


                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    {/* head */}
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Toy Image</th>
                            <th scope="col" className="px-6 py-3">Toy Name</th>
                            <th scope="col" className="px-6 py-3">Seller</th>
                            <th scope="col" className="px-6 py-3">Sub-category</th>
                            <th scope="col" className="px-6 py-3">Available Quantity</th>
                            <th scope="col" className="px-6 py-3">price</th>
                            <th scope="col" className="px-6 py-3">update</th>
                            <th scope="col" className="px-6 py-3">Delete</th>
                        </tr>
                    </thead>

                    {
                        addedToys.map(toy => (

                            <tbody key={toy._id}>
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">

                                    <td className="px-6 py-4">
                                        <img className='w-20 rounded-xl' src={toy.picture} alt="" />
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {toy.toy_name}
                                    </th>

                                    <td className="px-6 py-4">
                                        {toy.seller_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {toy.sub_category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {toy.available_quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${toy.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to={`/updatedetails/${toy._id}`}><button className='btn btn-primary'> update</button></Link>

                                    </td>

                                    <td className="px-6 py-4">
                                        <button onClick={() => handleDelete(toy._id)} className='btn btn-warning'>Delete</button>
                                    </td>
                                </tr>

                            </tbody>))
                    }

                </table>
            </div>
        </div>
    );
};

export default MyToys;