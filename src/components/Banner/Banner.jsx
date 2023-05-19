import React from 'react';
import banner1 from '../../assets/banner/banner3.jpg'
import banner2 from '../../assets/banner/banner4.jpg'
import banner3 from '../../assets/banner/banner5.jpg'
import banner4 from '../../assets/banner/banner2.jpg'
import banner5 from '../../assets/banner/banner1.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]  ">

            <div id="slide1" className="carousel-item relative w-full  ">
                <img src={banner1} className="w-full " />
                <div className="absolute  flex items-center h-full   text-right bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  w-full ">
                    <div className='text-white w-1/2  space-y-7 text-left pl-5'>
                        <h2 className='text-5xl font-bold'>CarMagination  </h2>
                        <p className='text-xl text-gray-300'> Are you searching for your imaginary toys.There are many variations of car toys are available ,here you can find your desirable car toys.</p>
                        <button className='btn btn-primary'>Explore Now!!!</button>

                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-0 bottom-0 mr-10 space-x-7">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full  ">
                <img src={banner2} className="w-full " />
                <div className="absolute  flex items-center h-full   text-right bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  w-full ">
                    <div className='text-white w-1/2 space-y-7 text-left pl-5'>
                        <h2 className='text-5xl font-bold'>CarMagination  </h2>
                        <p className='text-xl text-gray-300'> Are you searching for your imaginary toys.There are many variations of car toys are available ,here you can find your desirable car toys.</p>
                        <button className='btn btn-primary'>Explore Now!!!</button>

                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-0 bottom-0 mr-10 space-x-7">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full  ">
                <img src={banner3} className="w-full " />
                <div className="absolute  flex items-center h-full   text-right bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  w-full ">
                    <div className='text-white w-1/2 space-y-7 text-left pl-5'>
                        <h2 className='text-5xl font-bold'>CarMagination  </h2>
                        <p className='text-xl text-gray-300'> Are you searching for your imaginary toys.There are many variations of car toys are available ,here you can find your desirable car toys.</p>
                        <button className='btn btn-primary'>Explore Now!!!</button>

                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-0 bottom-0 mr-10 space-x-7">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full  ">
                <img src={banner4} className="w-full " />
                <div className="absolute  flex items-center h-full   text-right bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  w-full ">
                    <div className='text-white w-1/2 space-y-7 text-left pl-5'>
                        <h2 className='text-5xl font-bold'>CarMagination  </h2>
                        <p className='text-xl text-gray-300'> Are you searching for your imaginary toys.There are many variations of car toys are available ,here you can find your desirable car toys.</p>
                        <button className='btn btn-primary'>Explore Now!!!</button>

                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-0 bottom-0 mr-10 space-x-7">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full  ">
                <img src={banner5} className="w-full " />
                <div className="absolute  flex items-center h-full   text-right bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  w-full ">
                    <div className='text-white w-1/2 space-y-7 text-left pl-5'>
                        <h2 className='text-5xl font-bold'>CarMagination  </h2>
                        <p className='text-xl text-gray-300'> Are you searching for your imaginary toys.There are many variations of car toys are available ,here you can find your desirable car toys.</p>
                        <button className='btn btn-primary'>Explore Now!!!</button>

                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-0 bottom-0 mr-10 space-x-7">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full  ">
                <img src={banner1} className="w-full " />
                <div className="absolute  flex items-center h-full   text-right bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  w-full ">
                    <div className='text-white w-1/2 space-y-7 text-left pl-5'>
                        <h2 className='text-5xl font-bold'>CarMagination  </h2>
                        <p className='text-xl text-gray-300'> Are you searching for your imaginary toys.There are many variations of car toys are available ,here you can find your desirable car toys.</p>
                        <button className='btn btn-primary'>Explore Now!!!</button>

                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-0 bottom-0 mr-10 space-x-7">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;