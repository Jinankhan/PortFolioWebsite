import { Box } from '@mui/material';
import React from 'react';
import { SKILL_ELEMENTS } from '../../../utils/constants';
import ResponsibilityCard from '../ResponsibilityCard';

const SkillSummary = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '120px 40px 120px 40px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    width: 'fit-content'
                }}
            >
                {SKILL_ELEMENTS.map((item) => {
                    return (
                        <ResponsibilityCard
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default SkillSummary;
