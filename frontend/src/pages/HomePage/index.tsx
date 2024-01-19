import React from 'react';
import LandingTemplate from '../../components/templates/landingTemplate';
import AboutPage from '../AboutPage';
import SkillPage from '../SkillPage';
import ProjectPage from '../ProjectPage';
import SummaryPage from '../SummarPage';
import ContactMePage from '../ContactMePage';

const slots = [
    {
        id: 1,
        content: <AboutPage />
    },
    {
        id: 2,
        content: <ProjectPage />
    },

    {
        id: 3,
        content: <SkillPage />
    },
    {
        id: 4,
        content: <SummaryPage />
    },
    {
        id: 5,
        content: <ContactMePage />
    }
];

const HomePage = () => {
    return <LandingTemplate slots={slots} />;
};

export default HomePage;
