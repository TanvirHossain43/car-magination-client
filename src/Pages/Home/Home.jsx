import React from 'react';
import Banner from '../../components/Banner/Banner';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <FeatureProduct></FeatureProduct>
            
        </div>
    );
};

export default Home;