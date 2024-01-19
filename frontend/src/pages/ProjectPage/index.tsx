import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import Carousal from '../../components/organisms/Carousal';
import { PROJECT_LIST } from '../../utils/constants';
import Cards from '../../components/molecules/Card';

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
            heading="Projects"
            subHeading="Have a look on some of the projects i worked on"
            id="projects"
        />
    );
};

export default ProjectPage;
