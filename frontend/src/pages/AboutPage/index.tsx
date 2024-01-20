import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import AboutSection from '../../components/organisms/AboutSection';

const AboutPage = () => {
    return <CommonTemplate content={<AboutSection />} id="about" />;
};

export default AboutPage;
