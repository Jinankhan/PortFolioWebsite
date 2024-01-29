import { Box } from '@mui/material';
import React from 'react';
import raisedHand from '../../../../public/assets/icons/raised.svg';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import background from '../../../../public/assets/icons/background.jpg';
const Footer = () => {
    return (
        <Box
            sx={{
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
            }}
        >
            <Typography variant="h6">Made with </Typography>
            <Icon src={raisedHand} sx={{ width: 30, height: 30 }} />
            <Typography variant="h6"> By Jinan</Typography>
        </Box>
    );
};

export default Footer;
