import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import SkillContainer from '../../components/organisms/SkillContainer';

const SkillPage = () => {
    return (
        <CommonTemplate
            content={<SkillContainer />}
            heading="My Skills"
            subHeading="I like to build and craft scalable products"
            id="skills"
        />
    );
};

export default SkillPage;
