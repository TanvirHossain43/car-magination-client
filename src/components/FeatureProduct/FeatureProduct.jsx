import React, { useEffect, useState } from 'react';

const FeatureProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://car-toys-server.vercel.app/featuretoys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mt-10'>
            <div >
                <h2 className='text-3xl font-extrabold text-center text-teal-600'>Feature Products</h2>
                <p className='text-center'>Highlight popular or newly released car toys..</p>
            </div>
            <div className='grid md:grid-cols-3 mx-auto items-baseline justify-items-center mt-6'>
                {
                    products.map(product => (


                        <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={product.image} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">

                                    <div className="badge badge-outline py-5 px-3 bg-emerald-500 text-white">Price:{product.price}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeatureProduct;