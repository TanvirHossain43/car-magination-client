import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateDetails = () => {

    const UpdateDetails = useLoaderData()
    console.log(UpdateDetails)
    const { _id, available_quantity,  price, toy_description} = UpdateDetails;
    console.log(_id)
   
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyPrice = form.price.value;
        const toyQuantity = form.quantity.value;
        const toyDescription = form.description.value;
        
        const newToy =
        {
            price: toyPrice,
            toy_description: toyDescription,
            available_quantity: toyQuantity,

        }
        const proceed = confirm('Are you sure you want to update the toy?');

        if (proceed) {
            fetch(`https://car-toys-server.vercel.app/alltoys/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newToy)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.modifiedCount>0){
                        Swal.fire(
                            'Data Updated successfully!',
                            'Good Job!',
                            'success'
                        )
                    }
                    else{
                        alert('Nothing has changed')
                    }
                    
                })
                .catch(error => {
                    console.error('Error updating toy:', error);
                    // Handle the error and show an error message to the user
                });
        }
    };

    return (
        <div className='w-10/12 mx-auto mt-10 mb-6'>
            <form onSubmit={handleUpdate}>
                
    
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="price" id="floating_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  defaultValue={price}/>
                        <label htmlFor="floating_price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Toy Price</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="quantity" id="floating_quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  defaultValue={available_quantity}/>
                        <label htmlFor="floating_quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available Quantity</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Description</label>
                    <textarea id="message" name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write here about toy description" defaultValue={toy_description}></textarea>

                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Details</button>
            </form>
        </div>
    );
};

export default UpdateDetails;