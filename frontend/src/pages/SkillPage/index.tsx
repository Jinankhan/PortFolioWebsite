import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import SkillContainer from '../../components/organisms/SkillContainer';
import { SKILL_PAGE } from '../../utils/constants';

const SkillPage = () => {
    return (
        <CommonTemplate
            content={<SkillContainer />}
            heading={SKILL_PAGE.heading}
            subHeading={SKILL_PAGE.subHeading}
            id="skills"
        />
    );
};

export default SkillPage;
