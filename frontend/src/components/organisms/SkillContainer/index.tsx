import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import TabComponent from '../../molecules/Tab';
import {
    BACKEND_SKILLS,
    FRONTEND_SKILLS,
    TESTING_SKILLS,
    VERSIONING_SKILLS
} from '../../../utils/constants';
import Icon from '../../atoms/Icon';

interface IContentProps {
    content: { id: number; skill: string; icon: string }[];
}
const SkillContainer = () => {
    const [activeTab, setActiveTab] = useState(0);

    const Content = ({ ...props }: IContentProps) => {
        return (
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',

                    '@media (max-width: 1250px)': {
                        gridTemplateColumns: 'repeat(2, 1fr)'
                    },
                    '@media (max-width: 700px)': {
                        gridTemplateColumns: 'repeat(1, 1fr)'
                    },
                    padding: '30px'
                }}
            >
                {props.content.map((item) => {
                    return (
                        <Box
                            key={item.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                padding: 10,
                                borderTopLeftRadius: '10px',
                                borderBottomRightRadius: '10px',
                                background: '#3A3A3D',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Icon
                                src={item.icon}
                                sx={{ width: 70, height: 70 }}
                            />
                            <Typography variant="h5">{item.skill}</Typography>
                        </Box>
                    );
                })}
            </Box>
        );
    };

    const SKILL_TABS = [
        {
            id: 1,
            content: <Content content={FRONTEND_SKILLS} />,
            label: 'Front-End'
        },
        {
            id: 2,
            content: <Content content={BACKEND_SKILLS} />,
            label: 'Back-End'
        },
        {
            id: 3,
            content: <Content content={VERSIONING_SKILLS} />,
            label: 'Version-Control'
        },
        {
            id: 4,
            content: <Content content={TESTING_SKILLS} />,
            label: 'Testing'
        }
    ];

    return (
        <Box
            sx={{
                padding: '50px 200px 100px 200px',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    background: '#262529',
                    padding: '10px 80px 80px 80px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '10px',
                    gap: '10px',
                    '@media (max-width: 525px)': {
                        padding: 0
                    }
                }}
            >
                <TabComponent
                    value={activeTab}
                    tabs={SKILL_TABS}
                    onChange={(value) => setActiveTab(value)}
                />

                {SKILL_TABS[activeTab].content}
            </Box>
        </Box>
    );
};

export default SkillContainer;
