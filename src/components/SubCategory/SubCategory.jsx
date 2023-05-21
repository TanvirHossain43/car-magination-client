import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToys from './CategoryToys';

const SubCategory = () => {

    const [categories, setCategories] = useState([])
    const [activeTab, setActiveTab] = useState('sports')

    useEffect(() => {
        fetch(`https://car-toys-server.vercel.app/categorytoys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [activeTab])

    const handleClick = (tabname) => {
        setActiveTab(tabname)
    }

    return (
        <div className='mt-10 mb-6'>
            <h2 className='text-3xl font-extrabold text-center text-teal-600'>  Car toys based on Category </h2>
            <Tabs className="mx-auto">
                <TabList>
                    <Tab onClick={() => handleClick("sports")} >Sport Car</Tab>
                    <Tab onClick={() => handleClick("truck")}>Turbo truck</Tab>
                    <Tab onClick={() => handleClick("police")}>police car</Tab>
                </TabList>

              
            </Tabs>
            <div className='md:flex lg:flex gap-x-4' >
                {
                    categories.map(category =><CategoryToys
                    key={category._id}
                    category={category}
                    ></CategoryToys>)
                }
            </div>
        </div>
    );
};

export default SubCategory;