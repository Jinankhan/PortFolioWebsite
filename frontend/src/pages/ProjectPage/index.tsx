import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import Carousal from '../../components/organisms/Carousal';
import { PROJECT_LIST, PROJECT_PAGE } from '../../utils/constants';
import Cards from '../../components/molecules/Card';
import background from '../../../public/assets/icons/background3.svg';

const ProjectPage = () => {
    const data = PROJECT_LIST.map((item) => {
        return {
            content: (
                <Cards
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    about={item.about}
                    sx={{ width: 700 }}
                    background={item.background}
                />
            ),
            id: item.id
        };
    });
    return (
        <CommonTemplate
            content={<Carousal carousalList={data} />}
            heading={PROJECT_PAGE.heading}
            subHeading={PROJECT_PAGE.subHeading}
            id="projects"
            background={background}
        />
    );
};

export default ProjectPage;
