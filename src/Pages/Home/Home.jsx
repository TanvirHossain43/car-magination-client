import React from 'react';
import Banner from '../../components/Banner/Banner';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct';
import FaqSection from '../../components/FaqSection/FaqSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <FeatureProduct></FeatureProduct>
            <FaqSection></FaqSection>
            
        </div>
    );
};

export default Home;