import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import SkillSummary from '../../components/molecules/SkillSummary';
import { SUMMARY_PAGE } from '../../utils/constants';
import background from '../../../public/assets/icons/background5.svg';

const SummaryPage = () => {
    return (
        <CommonTemplate
            content={<SkillSummary />}
            heading={SUMMARY_PAGE.heading}
            subHeading={SUMMARY_PAGE.subHeading}
            id="commitment"
            background={background}
        />
    );
};

export default SummaryPage;
