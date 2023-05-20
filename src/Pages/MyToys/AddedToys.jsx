import React from 'react';
import Swal from 'sweetalert2'

const AddedToys = ({ toy,handleDelete }) => {
    
    const { _id, seller_name, price, toy_name, rating, available_quantity, sub_category, picture } = toy
    return (

        <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">

                <td className="px-6 py-4">
                    <img className='w-20 rounded-xl' src={picture} alt="" />
                </td>
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
                    <button className='btn btn-primary'> update</button>
                </td>

                <td className="px-6 py-4">
                    <button onClick={()=>handleDelete(_id)} className='btn btn-warning'>Delete</button>
                </td>
            </tr>

        </tbody>

    );
};

export default AddedToys;