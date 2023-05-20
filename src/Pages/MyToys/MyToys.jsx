import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AddedToys from './AddedToys';
import Swal from 'sweetalert2'

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [addedToys, setAddedToys] = useState([])
    const url = `https://car-toys-server.vercel.app/alltoys?email=${user?.email}`
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
            <h2>my toys : ${addedToys.length}</h2>
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
                        addedToys.map(toy => <AddedToys
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></AddedToys>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyToys;