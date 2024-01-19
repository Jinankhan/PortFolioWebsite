import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import SkillSummary from '../../components/molecules/SkillSummary';

const SummaryPage = () => {
    return (
        <CommonTemplate
            content={<SkillSummary />}
            heading="My Responsibility"
            subHeading="I make sure your website is running always"
            id="commitment"
        />
    );
};

export default SummaryPage;
