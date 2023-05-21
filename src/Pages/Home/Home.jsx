import React from 'react';
import Banner from '../../components/Banner/Banner';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct';
import FaqSection from '../../components/FaqSection/FaqSection';
import SubCategory from '../../components/SubCategory/SubCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <SubCategory></SubCategory>
            <FeatureProduct></FeatureProduct>
            <FaqSection></FaqSection>
            
        </div>
    );
};

export default Home;