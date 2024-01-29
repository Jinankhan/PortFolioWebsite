import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import AboutSection from '../../components/organisms/AboutSection';
import background from '../../../public/assets/icons/background2.svg';

const AboutPage = () => {
    return (
        <CommonTemplate
            content={<AboutSection />}
            id="about"
            background={background}
        />
    );
};

export default AboutPage;
