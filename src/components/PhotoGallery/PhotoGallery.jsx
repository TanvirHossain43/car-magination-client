import React from 'react';
import car1 from '../../assets/car gallery/car1.jpg'
import car2 from '../../assets/car gallery/car2.jpg'
import car3 from '../../assets/car gallery/car3.jpg'
import car4 from '../../assets/car gallery/car4.jpg'
import car5 from '../../assets/car gallery/car5.jpg'
import car6 from '../../assets/car gallery/car6.jpg'
import car7 from '../../assets/car gallery/car7.jpg'
import car16 from '../../assets/car gallery/car16.jpg'
import car9 from '../../assets/car gallery/car-9.jpg'
import car10 from '../../assets/car gallery/car10.jpg'
import car11 from '../../assets/car gallery/car11.jpg'
import car12 from '../../assets/car gallery/car12.jpg'
import car13 from '../../assets/car gallery/car13.jpg'
import car14 from '../../assets/car gallery/car14.jpg'
import car15 from '../../assets/car gallery/car15.jpg'

const PhotoGallery = () => {
    return (

        <div className='mt-20'>
            <div className='mb-20 space-y-4'> 
                <h2 className='text-3xl text-center font-extrabold text-teal-600'>Car Toy Photo Gallery</h2>
                <p className='text-xl text-center'>This gallery will show you what kind of car toys you will find here....</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car9} />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car1} />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car12} />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car3} />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car14} />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car11} />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car15} />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car10} />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car4} />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car16} />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car7} />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={car13} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PhotoGallery;