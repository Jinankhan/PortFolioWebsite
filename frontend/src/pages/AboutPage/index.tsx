import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import AboutSection from '../../components/molecules/AboutSection';

const AboutPage = () => {
    return <CommonTemplate content={<AboutSection />} id="about" />;
};

export default AboutPage;
