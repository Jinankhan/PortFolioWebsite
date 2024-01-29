import { Box } from '@mui/material';
import React from 'react';
import Typography from '../../atoms/Typography';

interface ICommonTemplateProps {
    content: React.ReactNode;
    heading?: string;
    subHeading?: string;
    id?: string;
    background?: string;
}
const CommonTemplate = ({ ...props }: ICommonTemplateProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: `url(${props.background}) center center`,
                backgroundSize: 'cover'
            }}
            id={props.id}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '0 25px 0 14px'
                }}
            >
                <Typography variant="title" color="text.highEmphasis">
                    {props?.heading}
                </Typography>
                <Typography variant="h6" color="text.lowEmphasis">
                    {props?.subHeading}
                </Typography>
            </Box>
            {props.content}
        </Box>
    );
};

export default CommonTemplate;
