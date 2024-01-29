import { Box } from '@mui/material';
import React from 'react';
import Icon from '../../atoms/Icon';
import Typography from '../../atoms/Typography';

interface IResponsibilityCardProps {
    icon: string;
    title: string;
    description: string;
}
const ResponsibilityCard = ({ ...props }: IResponsibilityCardProps) => {
    return (
        <Box
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
                <Icon src={props.icon} sx={{ width: 40, height: 40 }} />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    wordWrap: 'break-word'
                }}
            >
                <Typography variant="h2" color="text.highEmphasis">
                    {props.title}
                </Typography>
                <Typography variant="body1" color="text.lowEmphasis">
                    {props.description}
                </Typography>
            </Box>
        </Box>
    );
};

export default ResponsibilityCard;
