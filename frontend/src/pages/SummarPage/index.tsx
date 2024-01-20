import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import SkillSummary from '../../components/molecules/SkillSummary';
import { SUMMARY_PAGE } from '../../utils/constants';

const SummaryPage = () => {
    return (
        <CommonTemplate
            content={<SkillSummary />}
            heading={SUMMARY_PAGE.heading}
            subHeading={SUMMARY_PAGE.subHeading}
            id="commitment"
        />
    );
};

export default SummaryPage;
