import { Box } from '@mui/material';
import React from 'react';
import { SKILL_ELEMENTS } from '../../../utils/constants';
import Icon from '../../atoms/Icon';
import Typography from '../../atoms/Typography';

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
                        <Box
                            key={item.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '50px',
                                background: '#262529',
                                borderRadius: '12px',
                                padding: '20px'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    background: '#B4A9FF',
                                    borderRadius: '50%',
                                    padding: '20px'
                                }}
                            >
                                <Icon
                                    src={item.icon}
                                    sx={{ width: 40, height: 40 }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    wordWrap: 'break-word'
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    color="text.highEmphasis"
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.lowEmphasis"
                                >
                                    {item.description}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default SkillSummary;
